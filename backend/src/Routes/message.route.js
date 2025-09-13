import { Router } from "express";
import protectedroute from "../middleware/protected.js";
import getuser from "../messagescontroller/getuser.js";
import getmessages from "../messagescontroller/getmessages.js";
import sendmessage from "../messagescontroller/send.message.js";

const router = Router();

router.get("/user",protectedroute,getuser);

router.get("/:id",protectedroute,getmessages);

router.post("/send/:id",protectedroute,sendmessage)

export default router;