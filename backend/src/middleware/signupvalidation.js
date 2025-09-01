import joi from "joi";

const signupvalidation = (req,res,next)=>{

const schema = joi.object({
    name:joi.string().min(4).max(10).required(),
    email:joi.string().unique().min(5).max(12).required(),
    password:joi.string().min(4).max(10).required()
})

const {error}= schema.validate(req.body);

if(error ){
    res.status(400).json({success:false,message:"validation error"});
}

 next();


}

export default signupvalidation;