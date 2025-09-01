import express from "express";
import mongoose from "mongoose";
import router from "./Routes/user.routes.js";

const app = express();

app.use("/auth", router);

app.listen(8000,()=>{
    try{
    console.log("server is running");
    }catch(err){
        console.error("the error is "+err)
    }
});

