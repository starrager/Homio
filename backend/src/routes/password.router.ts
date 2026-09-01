import { Router } from "express";
import { middleware } from "../middleware/middleware";
import { changePassword } from "../controllers/passowrd.controler";

const router=Router()

router.put('/',middleware,changePassword)

export default router