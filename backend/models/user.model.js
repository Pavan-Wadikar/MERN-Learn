const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true

    },
    avatar:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4h7ysNTjVOJNzeL5XC6cfKr7W7m8hfs-Hu_XF_ICfxg&s'

    },
},{timestamps:true})


const User=mongoose.model('User',userSchema)
module.exports={User}