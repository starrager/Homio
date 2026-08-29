import { Request,Response } from "express";
import prisma from '../prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET=process.env.JWT_SECRET!

export const register=async(req:Request,res:Response)=>{
    try{
        const {email,nameFirst,nameLast,password}=req.body

        const userExisting=await prisma.user.findUnique({where:{email:email}})
        if(userExisting)return res.status(400).json({error:'user already exists'})
        
        const hashedPassword=await bcrypt.hash(password,10)
        
        const user=await prisma.user.create({
            data:{
                nameFirst,
                nameLast,
                email,
                password:hashedPassword,
            }
        })

        const token=jwt.sign(
            {userId:user.id,email:email,role:user.role},JWT_SECRET,{expiresIn:'7d'}
        )

        const {password:userPassword,...userWithoutPassoword}=user

        res.status(200).json({token,user:userWithoutPassoword})
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'register error'})
    }
}

export const login=async(req:Request,res:Response)=>{
    try{
        const {email,password}=req.body
        const user=await prisma.user.findUnique({where:{email:email}})
        
        if(!user)return res.status(404).json({error:'user not found'})
    
        const isValidPassword=await bcrypt.compare(password,user.password)
        if(!isValidPassword)return res.status(401).json({error:'invalid password'})

        const token=jwt.sign(
            {userId:user.id,email:email,role:user.role},JWT_SECRET,{expiresIn:'7d'}
        )
        
        const {password:userPassword,...userWithoutPassword}=user

        res.status(200).json({token,user:userWithoutPassword})    
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'login error'})
    }
}

export const getProfile=async(req:Request,res:Response)=>{
    try{
        const userId=req.userId

        const user=await prisma.user.findUnique({where:{id:userId}})
        if(!user)return res.status(400).json({error:'not authorized'})

        res.json({
            firstName:user.nameFirst,
            lastName:user.nameLast,
            email:user.email
        })
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'get profile error'})
    }
}