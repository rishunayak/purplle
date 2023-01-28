const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    address:String,
    mobile:Number,
    isAdmin:Boolean
})

const User=mongoose.model("users",userSchema)

module.exports=User;