import express from 'express'

const app=express()
const PORT=5178


app.listen(PORT,()=>{
    console.log(`THE SERVER IS RUNNING ON http://localhost:${PORT}`)
})