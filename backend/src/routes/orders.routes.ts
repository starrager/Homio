import { Router } from "express";
import { middleware } from "../middleware/middleware";
import {getOrders} from '../controllers/orders.controller'

const router=Router()

router.post('/',middleware,getOrders)

export default router