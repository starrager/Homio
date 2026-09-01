import { Router } from "express";
import { middleware } from "../middleware/middleware";
import {getOrders} from '../controllers/orders.controller'

const router=Router()

router.get('/',middleware,getOrders)

export default router