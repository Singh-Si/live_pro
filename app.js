require("dotenv")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 5050
app.get("/test",async(req,res)=>{
    return res.status(200).json({status:200,message:"server is up"})
})
app.get("/test1",async(req,res)=>{
    return res.status(200).json({status:200,message:"server is up at test1"})
})
app.get("/test3",async(req,res)=>{
    return res.status(200).json({status:200,message:"server is up at test3"})
})
console.log("he anand")

app.listen(PORT,()=>{
    console.log(`server is started at port number ${PORT}`)
})