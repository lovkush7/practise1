import generatetoken from "../lib/cookies.libary.js";
import usermodel from "../Model/model.js";
import bcrypt from "bcryptjs"


const login =async (req,res)=>{

const {email,password,name,profilepic}=req.body;

try{
    const user = await usermodel.findOne({email});

    if(!user){
        return res.status(402).json({success:false,message:"user dosent exist"})
    }

    const ispassequal = await bcrypt.compare(password,user.password);

    if(!ispassequal){
        return res.status(405).json({success:false,message:"unauthorize credintials"})
    }
    console.log("user._id before generating token:", user._id);
// generatetoken(res, user._id);

  
     generatetoken(res,user._id);
     res.status(200).json({
        success:true,
        email:user.email,
        name:user.name,
        profilepic:user.profilepic
     })


}catch(err){
    console.error("the error is "+err);
}

}
export default login;