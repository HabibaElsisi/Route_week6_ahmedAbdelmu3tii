export const allowedTo=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role))
            return res.json({message:"you are not authorized to access this"})
        next()
    }
}