
import mongoose from "mongoose";
const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true})
export const noteModel=mongoose.model("note",schema)