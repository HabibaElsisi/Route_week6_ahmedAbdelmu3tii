import { userModel } from "../../../database/models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const signUp=async(req,res,next)=>{
    await userModel.insertMany(req.body)
    res.json({message:"signUp successfully"})
}
const signIn=async(req,res,next)=>{
    let isEmailExists=await userModel.findOne({email:req.body.email})
    if(isEmailExists && bcrypt.compareSync(req.body.password,isEmailExists.password)){
        let token=jwt.sign({userId:isEmailExists._id,role:isEmailExists.role},process.env.JWT_SECRET_KEY)
        return res.json({message:"login successfully",token})
    }
    res.json({message:"incorrect email or password"})
    
}


export{
    signUp,
    signIn,
}