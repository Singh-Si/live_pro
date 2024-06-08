require("dotenv")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 5050
app.get("/test",async(req,res)=>{
    return res.status(200).json({status:200,message:"server is up"})
})
console.log("he anand")

app.listen(PORT,()=>{
    console.log(`server is started at port number ${PORT}`)
})