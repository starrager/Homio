import { Request,Response } from "express";
import prisma from '../prisma'

export const getOrders=async(req:Request,res:Response)=>{
    try{

    }catch(error){
        console.error(error)
        return res.status(500).json({error:'get orders error'})
    }
}