import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET=process.env.JWT_SECRET

export const middleware=(req:Request,res:Response,next:NextFunction)=>{
    try{
        const authHeader=req.headers.authorization
        const token=authHeader?.split(' ')[1]

        if(!token)return res.status(401).json({error:'authorization is required'})

        const decoded=(jwt.verify(token,JWT_SECRET as string)as any)
        req.userId=decoded.userId
        next()
    }catch(error){
        console.error(error)
        res.status(401).json({error:'wrong password'})
    }
}