import { Request,Response } from "express";
import prisma from '../prisma'
import bcrypt from 'bcryptjs'

export const changePassword=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId
        const {currentPassword,newPassword,confirmPassword}=req.body
        if(!confirmPassword||!newPassword||!currentPassword)return res.status(500).json({error:'change password error'})
        if(confirmPassword!==newPassword)return res.status(500).json({error:'change password error'})

        const user=await prisma.user.findUnique({where:{id:userId}})
        if(!user)return res.status(400).json({error:'not authorized'})

        const isValidPassword=await bcrypt.compare(currentPassword,user.password)
        if(!isValidPassword)return res.status(400).json({error:'wrong password'})

        const hashedPassword=await bcrypt.hash(newPassword,10)

        await prisma.user.update({
            where:{id:userId},
            data:{password:hashedPassword}
        })
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'change password error'})
    }
}