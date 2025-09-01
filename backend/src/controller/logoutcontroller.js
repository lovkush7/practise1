

const logout = (req,res)=>{
    try{

    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({success:true,message:"logout successfully"});
     } catch(err) {
       console.error("the error is"+err)
    }
}
export default logout;