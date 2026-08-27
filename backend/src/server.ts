import express from 'express'
import cors from 'cors'

const app=express()
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true
}))

const PORT=process.env.JWT_SECRET


app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})