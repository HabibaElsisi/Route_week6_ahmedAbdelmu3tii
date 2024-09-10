import express from "express";
import { signIn, signUp } from "./user.controller.js";
import { checkEmailExists } from "../../middleware/checkEmailExists.js";
import { hashPassword } from "../../middleware/hashPassword.js";
let userRouter=express.Router()
userRouter.post("/signup",checkEmailExists,hashPassword,signUp)
userRouter.post("/signin",signIn)


export default userRouter