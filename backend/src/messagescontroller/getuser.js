import usermodel from "../Model/model.js";


const getuser =async(req,res)=>{
    try{
     const loggedinuser = req.user.id;
     const filteruser = await usermodel.find({_id: {$ne:loggedinuser}}).select("-password");

     res.status(200).json({success:true,filteruser})
    }catch(err){
        console.error("the error is "+err);
    }

}
export default getuser;