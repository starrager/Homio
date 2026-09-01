import { Request,Response } from "express";
import prisma from '../prisma'

export const setPhone=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId
        const {phone}=req.body
        const user=await prisma.user.findUnique({where:{id:userId}})

        if(!user)return res.status(400).json({error:'not authorized'})

        const userWithPhone=await prisma.user.update({
            where:{id:userId},
            data:{phone}
        })

        res.json({phone:userWithPhone.phone})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'set phone error'})
    }
}

export const setAddress=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId
        const {address}=req.body
        const user=await prisma.user.findUnique({where:{id:userId}})

        if(!user)return res.status(400).json({error:'not authorized'})

        const userWithAddress=await prisma.user.update({
            where:{id:userId},
            data:{address}
        })

        res.json({address:userWithAddress.address})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'set address error'})
    }
}

export const setNotifications=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId
        const {order,reminders,news}=req.body
        const user=await prisma.user.update({
            where:{id:userId},
            data:{
                order:order,
                reminders:reminders,
                news:news
            }
        })

        res.json(user)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'set notifications error'})
    }
}

export const changeName=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId
        const {firstName,lastName}=req.body
        const user=await prisma.user.update({
            where:{id:userId},
            data:{
                nameFirst:firstName,
                nameLast:lastName
            }
        })

        res.json(user)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'change name error'})
    }
}

export const changeEmail=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId
        const {email}=req.body
        const user=await prisma.user.update({
            where:{id:userId},
            data:{
                email:email
            }
        })

        res.json(user)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'change email error'})
    }
}