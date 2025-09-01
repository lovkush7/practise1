import mongoose from "mongoose";
import { type } from "os";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const usermodel = new mongoose.model("data",userschema);

export default usermodel;