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
app.use('/auth',authRoutes)
app.use('/setdata',setDataRoutes)

app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})