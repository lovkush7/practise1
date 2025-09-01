import Joi from "joi";

const loginvalidation = (req,res,next)=>{

const schema = Joi.object({
    email:Joi.string().min(5).max(20).required(),
    password:Joi.string().min(4).max(10).required()
})

const {error}= schema.validate(req.body);

if(error ){
    res.status(400).json({success:false,  message: error.details[0].message,});
}

 next();


}

export default loginvalidation;