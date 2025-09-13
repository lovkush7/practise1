import cloudinary from "../lib/cloudnary.js";
import messagemodel from "../Model/message.js";


const sendmessage = async(req,res)=>{

    try{
        const {text , image }=req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

         let imageurl;

        if(image){
         const uploadresponse = await cloudinary.uploader.upload(image);
         imageurl = uploadresponse.secure_url;
        }

        const newmessage = new messagemodel({
            senderId,
            receiverId,
            text,
            image:imageurl
        });

        await newmessage.save();

        //we will do the socket io here

        res.status(200).json(newmessage);

    }catch(err){
        console.error("the error is "+err)
    }

}
export default sendmessage;