import { Jwt } from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"))
    }
    jwt.verifyToken(token,process.env.JWT-secret-key, (error,user)=> {
        if(error) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next()
    })
}