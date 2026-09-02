import express from 'express'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))

const PORT=process.env.PORT

import './cron/orders.cron'
import authRoutes from './routes/auth.routes'
import dataRoutes from './routes/data.routes'
import passwordRoutes from './routes/password.router'
import orderRoutes from './routes/order.routes'
import ordersRoutes from './routes/orders.routes'
app.use('/auth',authRoutes)
app.use('/data',dataRoutes)
app.use('/password',passwordRoutes)
app.use('/order',orderRoutes)
app.use('/orders',ordersRoutes)

app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})