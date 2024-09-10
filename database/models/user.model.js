import bcrypt from "bcrypt"
import mongoose from "mongoose";
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})


export const userModel=mongoose.model("user",schema)