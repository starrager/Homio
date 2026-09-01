import {Router} from 'express'
import { setPhone,setAddress,setNotifications } from '../controllers/data.controller'
import { middleware } from '../middleware/middleware'

const router=Router()

router.put('/phone',middleware,setPhone)
router.put('/address',middleware,setAddress)
router.put('/notifications',middleware,setNotifications)

export default router