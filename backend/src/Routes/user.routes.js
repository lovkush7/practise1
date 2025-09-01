import {Router} from "express";
import loginvalidation from "../middleware/loginvalidation.js";

const router = Router();

router.post("/login",loginvalidation)


export default router;