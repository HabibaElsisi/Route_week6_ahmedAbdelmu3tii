import jwt from "jsonwebtoken"
import { userModel } from "../../database/models/user.model.js"
export const protectedRoutes=async(req,res,next)=>{
   try{ let token=req.headers.token
    if(!token)return res.json({message:"token not provided"})
    let decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
    let user=await userModel.findById(decoded.userId)
    if(!user)return res.json({message:"user not found"})
    req.user=user
    next()
   }catch(err){
    return res.json({message:"there is an error",err})
   }
}