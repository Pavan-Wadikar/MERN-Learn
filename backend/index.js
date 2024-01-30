const express=require('express')

const userRouter=require('./routes/user.route.js')
const mongoose=require('mongoose')

const dotenv=require('dotenv')

dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected successfully ");
}).catch((err)=>{
    console.log(err);
})
const app=express()


app.use('/backend/user',userRouter)


app.listen(8000,()=>{
    console.log("Server running on port 8000!!!")
})