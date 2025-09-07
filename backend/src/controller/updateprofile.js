import cloudinary from "../lib/cloudnary.js";
import usermodel from "../Model/model.js";


const updateprofile = async(req,res)=>{

try{
    const {profilepic} = req.body;
    
    const userid = req.user._id;

   

    if(!profilepic){
        return res.status(400).json({success:false,message:"profile pictrue is needed"});
    }

    const uploadresponse = await cloudinary.uploader.upload(profilepic);
    const updateuser = await usermodel.findByIdAndUpdate(userid,{profilepic:uploadresponse.secure_url},{new:true});

    res.json(updateuser);

}catch(err){
console.error("the error is "+err);
res.status(500).json({ success: false, message: "Server error" });

}

}
export default updateprofile;