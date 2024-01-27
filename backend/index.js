const express=require('express')

const mongoose=require('mongoose')

const dotenv=require('dotenv')

dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected successfully ");
}).catch((err)=>{
    console.log(err);
})
const app=express()



app.listen(8000,()=>{
    console.log("Server running on port 8000!!!")
})