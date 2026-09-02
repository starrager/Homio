import { Router } from "express";
import { middleware } from "../middleware/middleware";
import {getOrders,getHistory} from '../controllers/orders.controller'

const router=Router()

router.get('/',middleware,getOrders)
router.get('/history',middleware,getHistory)

export default router