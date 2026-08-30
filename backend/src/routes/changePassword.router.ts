import { Router } from "express";
import { middleware } from "../middleware/middleware";
import { changePassword } from "../controllers/changePassowrd.controler";

const router=Router()

router.put('/',middleware,changePassword)

export default router