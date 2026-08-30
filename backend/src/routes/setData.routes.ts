import {Router} from 'express'
import { setPhone,setAddress,setNotifications } from '../controllers/setData.controller'
import { middleware } from '../middleware/middleware'

const router=Router()

router.put('/setphone',middleware,setPhone)
router.put('/setaddress',middleware,setAddress)
router.put('/setnotifications',middleware,setNotifications)

export default router