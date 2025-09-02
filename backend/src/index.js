import express from "express";
import mongoose from "mongoose";
import router from "./Routes/user.routes.js";
import messagerouter from "./Routes/message.route.js";
import "dotenv/config.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/auth", router);
app.use("/messages",messagerouter)

app.listen(8000,async()=>{
    try{
    console.log("server is running");
    await mongoose.connect(process.env.MONGOCONN);
    console.log('connect to db');

    }catch(err){
        console.error("the error is "+err);
    }
});

