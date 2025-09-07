import express from "express";
import mongoose from "mongoose";
import router from "./Routes/user.routes.js";
import messagerouter from "./Routes/message.route.js";
import "dotenv/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
));

app.use("/auth", router);
app.use("/messages",messagerouter);

app.listen(8000,async()=>{
    try{
    console.log("server is running");
    await mongoose.connect(process.env.MONGOCONN);
    console.log('connect to db');

    }catch(err){
        console.error("the error is "+err);
    }
});

