import {Router} from "express";
import loginvalidation from "../middleware/loginvalidation.js";
import signupvalidation from "../middleware/signupvalidation.js";
import signup from "../controller/signupcontroller.js";
import login from "../controller/logincontroller.js";
import logout from "../controller/logoutcontroller.js";
import protectedroute from "../middleware/protected.js";
import updateprofile from "../controller/updateprofile.js";
import checkauth from "../controller/checkauth.js";

const router = Router();

router.post("/signup",signupvalidation,signup);

router.post("/login",loginvalidation,login);

router.post("/logout",logout);

router.put("/profilepic",protectedroute,updateprofile);

router.get("/check",protectedroute,checkauth);



export default router;