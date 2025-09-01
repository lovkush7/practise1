import jwt from "jsonwebtoken";
import "dotenv/config.js";

const generatetoken = (req,res,userid)=>{

    const token =  jwt.sign(
        {userid},
        process.env.SECRETKEY,
        {expiresIn:"7d"}
        )

        res.cookie("jwt", token,
         {
            maxAge:7*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict",
            secure:true
        });
        return token;
}

export default generatetoken;