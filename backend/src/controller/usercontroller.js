import usermodel from "../Model/model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import "dotenv/config.js"


const signup = async(req,res)=>{

const {name,email,password} = req.body;

try{
 const user=  await usermodel.findOne({email});

if (user){
    res.status(400).json({success:false,message:"user already signup you can login"});
}

const model = new usermodel({name,email,password});
model.password =await  bcrypt.hash(password,10);
await model.save();

if(model){
    const jwttoken = jwt.sign(
        {email:user.email,_id:user._id},
         process.env.SECRETKEY,
         {expiresIn:"40h"}
    )
     res.json({
        success:true,
        message:"success",
        jwttoken

     })

}

}catch(error){
    console.error("the error is"+err)
}

}