import prisma from "../services/prismaClient";
import CreateUserInput from "../interfaces/userInterface";
import { Response, Request } from "express";
import { valid_email } from "../constants/emailVerification";

const createUser = async(req:Request, res: Response)=>{
    try{
        const {email, firstName, lastName}: CreateUserInput = req.body
        let is_valid = false
        valid_email.forEach(verify => {
            console.log(verify)
            if(email.endsWith(verify)){
                is_valid = true
            }
        });
        if(is_valid){
            const newUser = await prisma.user.create({
                data:{
                    email,
                    firstName,
                    lastName,
                }
            })
            res.status(201).json({
                message:"User created",
                user: newUser
            })
        }else{
            res.status(403).json({
                message:"email format not valid"
            })
        }
    }catch(e){
        res.status(500).json({
            message:"Error",
            error: e
        })
    }
}

const getAllUser = async (req:Request, res:Response)=>{
    try{
        const users =  await prisma.user.findMany()
        if(!users){
            res.status(404).json({message: "users is empty"})
        }
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({message:"error", error: e})
    }
}

const getOneUser = async(req:Request, res: Response) =>{
    try{
        const {email} = req.body
        const finduser = await prisma.user.findFirst({
            where:{
                email: email
            }
        })
        if(finduser == null){
            res.status(403).json({
                message:"user not found"
            })
        }else{
            res.status(200).json({
                message:"user found",
                user: finduser
            })
        }
    }catch(e){
        res.status(500).json({message:"error", error: e})
    }
}

export {createUser, getAllUser, getOneUser}