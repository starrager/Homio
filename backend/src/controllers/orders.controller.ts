import { Request,Response } from "express";
import prisma from '../prisma'

export const getOrders=async(req:Request,res:Response)=>{
    try{
        const user=await prisma.user.findUnique({where:{id:req.userId}})
        if(!user)return res.status(400).json({error:'user not found'})

        const orders=await prisma.order.findMany({
            where:{userId:req.userId},
            orderBy:{createdAt:'desc'}
        })

        res.json(orders)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'get orders error'})
    }
}