import { userModel } from "../../database/models/user.model.js"

export const checkEmailExists=async(req,res,next)=>{
    let isUserExists=await userModel.findOne({email:req.body.email})
    if(isUserExists)return res.json({message:"this email already exists"})
    next()
}