import { Router } from "express";
import { middleware } from "../middleware/middleware";
import {createOrder} from '../controllers/createOrder.controller'

const router=Router()

router.post('/',middleware,createOrder)

export default router