import {v2 as cloudinary} from "cloudinary";
import "dotenv/config.js";

cloudinary.config({
    cloud_name:process.env.CLOUDANARY_CLOUD_NAME,
    api_key:process.env.CLOUDNARY_API_KEY,
    api_secret:process.env.CLOUDNARY_API_SECRET
    
});

export default cloudinary;