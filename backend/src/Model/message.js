// import { required, string } from "joi";
// import { required } from "joi";
import mongoose from "mongoose";

const messageschema = new mongoose.Schema({

      senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
      },
      receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
      },
      text:{
        type:String
      },
      image:{
        type:String
      },

},{timestamps:true});

const messagemodel = new mongoose.model("messages",messageschema);

export default messagemodel;