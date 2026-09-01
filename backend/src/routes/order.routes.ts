import { Router } from "express";
import { middleware } from "../middleware/middleware";
import {createOrder} from '../controllers/order.controller'

const router=Router()

router.post('/',middleware,createOrder)

export default router