import { Request,Response } from "express";
import prisma from '../prisma'

export const createOrder=async(req:Request,res:Response)=>{
    try{
        const {service,address,scheduledTime,comment,estimatedPrice}=req.body
        const userId=req.userId
        const scheduledDate=new Date(req.body.scheduledDate)


        if(!userId)return res.status(401).json({error:'not authorized'})

        const order=await prisma.order.create({
            data:{
                orderNumber:Math.floor(Math.random()*1000),
                userId:userId,
                service,
                address,
                scheduledDate,
                scheduledTime,
                comment,
                estimatedPrice,
                status:'New'
            }
        })

        res.json(order)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'make an order error'})
    }
}