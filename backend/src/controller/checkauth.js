
const checkauth =(req,res)=>{
    try{
        res.status(200).json(req.user);

    }catch(err){
        console.error("the error is "+err)
    }

}
export default checkauth;