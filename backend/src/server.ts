import express from 'express'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))

const PORT=process.env.PORT

import authRoutes from './routes/auth.routes'
import setDataRoutes from './routes/setData.routes'
import changePasswordRoutes from './routes/changePassword.router'
import createOrderRoutes from './routes/createOrder.routes'
app.use('/auth',authRoutes)
app.use('/data',setDataRoutes)
app.use('/password',changePasswordRoutes)
app.use('/order',createOrderRoutes)

app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})