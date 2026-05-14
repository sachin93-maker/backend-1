require ("dotenv").config();
const app= require("./src/app")
const connectDB= require("./src/db/db")
const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Bypasses local network/ISP DNS restrictions
connectDB()
app.listen(3000, ()=>{
    console.log("server  listening")

})