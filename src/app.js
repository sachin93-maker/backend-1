const express= require("express")
const multer= require("multer")
const uploadFile=require("./services/storage.services")
const postModel= require("./models/post.model")

const app= express() //instance of express
app.use(express.json())

const upload =multer({storage:multer.memoryStorage()}) //multer-reads file

app.post('/createpost', upload.single("image") ,async(req,res)=>{
    const result=await uploadFile(req.file.buffer)
    const post=await postModel.create({
        image: result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"post Created",
        post
    })
})

app.get('/posts', async(req, res)=>{
    const posts= await postModel.find()

    return res.status(200).json({
        message:"post fetched",
        posts
    })
})
    
module.exports= app