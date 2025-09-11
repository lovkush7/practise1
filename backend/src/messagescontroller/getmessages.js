import messagemodel from "../Model/message.js";


const getmessages =async(req,res)=>{

    try{
        const {id:usertochat} =req.params;
        const myid = req.user._id;

        const messages = await messagemodel.find({
            $or:[
                {senderId:myid, receiverId:usertochat},
                {senderId:usertochat, receiverId:myid}
            ]
        });
        res.status(200).json(messages);

    }catch(err){
        console.error("the error is"+err)
    }
}
export default getmessages;