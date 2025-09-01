import usermodel from "../Model/model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import "dotenv/config.js"
import generatetoken from "../lib/cookies.libary.js";


const signup = async(req,res)=>{

const {name,email,password,profilepic} = req.body;

try{
 const user=  await usermodel.findOne({email});

if (user){
    res.status(400).json({success:false,message:"user already signup you can login"});
}

const model = new usermodel({name,email,password});
model.password =await  bcrypt.hash(password,10);

if(model){
    generatetoken(model.id,res);
    await model.save();
res.status(202).json({
name:model.name,
email:model.email,
_id:model._id,
profilepic:model.profilepic
})
}
else{
    return res.json({success:false,message:'invalid userdata'})
}

// if(model){
//     const jwttoken = jwt.sign(
//         {email:user.email,_id:user._id},
//          process.env.SECRETKEY,
//          {expiresIn:"40h"}
//     )
//      res.json({
//         success:true,
//         message:"success",
//         jwttoken

//      })

// }

}catch(error){
    console.error("the error is"+err)
}

}
export default signup;