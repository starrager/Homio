import {Router} from 'express'
import { setPhone,setAddress,setNotifications,changeEmail,changeName } from '../controllers/data.controller'
import { middleware } from '../middleware/middleware'

const router=Router()

router.put('/phone',middleware,setPhone)
router.put('/address',middleware,setAddress)
router.put('/notifications',middleware,setNotifications)
router.put('/name',middleware,changeName)
router.put('/email',middleware,changeEmail)

export default router