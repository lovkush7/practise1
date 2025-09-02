import { Router } from "express";
import protectedroute from "../middleware/protected.js";
import getuser from "../messagescontroller/getuser.js";
import getmessages from "../messagescontroller/getmessages.js";

const router = Router();

router.get("/user",protectedroute,getuser);
router.get("/:id",protectedroute,getmessages);

export default router;