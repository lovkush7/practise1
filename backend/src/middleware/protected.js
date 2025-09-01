import jwt from "jsonwebtoken"
import usermodel from "../Model/model.js"
import "dotenv/config.js"


const protectedroute = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(404).json({success:false,messages:"unauthorize-token"})
        }
        const decoded = jwt.verify(token, process.env.SECRETKEY)

        if(!decoded){
            return res.json({success:false,messages:"invalid token"});

        }

        const user = await usermodel.findById(decoded.userid).select("-password");

        if(!user){
            return res.json({success:false,message:"user not found"})
        }

        req.user=user

        next();

    }catch(err){
        console.error("the error is "+err)
    }

}
export default protectedroute;