const express=require('express')

const userRouter=require('./routes/user.route.js')
const authRouter=require('./routes/auth.route.js')
const mongoose=require('mongoose')

const dotenv=require('dotenv')

dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected successfully ");
}).catch((err)=>{
    console.log(err);
})
const app=express()

app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


app.listen(8000,()=>{
    console.log("Server running on port 8000!!!")
})