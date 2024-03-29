const express=require('express')

const userRouter=require('./routes/user.route.js')
const authRouter=require('./routes/auth.route.js')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')

dotenv.config();




mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected successfully ");
}).catch((err)=>{
    console.log(err);
})
const app=express()

app.use(
    cors({
      origin: '*'})
  );

  app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.use((error,req,res,next)=>{
    const statusCode=error.statusCode||500;
    const errMessage=error.errMessage||"Internal server Error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        errMessage
    })
})

app.listen(8000,()=>{
    console.log("Server running on port 8000!!!")
})