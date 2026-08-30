import {Router} from 'express'
import { setPhone,setAddress } from '../controllers/setData.controller'
import { middleware } from '../middleware/middleware'

const router=Router()

router.put('/setphone',middleware,setPhone)
router.put('/setaddress',middleware,setAddress)

export default router