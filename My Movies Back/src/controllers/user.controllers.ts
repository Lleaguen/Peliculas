import { Request, Response } from "express"
import { Users } from "../entities/user"

export const createUser = async (req: Request, res: Response) => {

    try{
        const { email, password } = req.body;

        const user = new Users();
        user.email = email;
        user.password = password;
        if(!user.email) {
            await user.save();
            return res.status(201).json(user);
        } else {
            return res.send('Email has already exist')
        }
    } catch (error) {
        if(error instanceof Error){
        return res.status(500).json({message: error.message})
    }
    }
}

export const getUsers = async (req:Request, res: Response) => {
    try{
        const users = await Users.find();
        return res.json(users);
    } catch(error){
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
    const user = await Users.findOneBy({id: parseInt(req.params.id)});
    
    if (!user) return res.status(404).json({message: 'User does not exists'}); 
    
    await Users.update({id: parseInt(id)}, req.body);
    return res.status(204)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params

        const result = await Users.delete({id: parseInt(id)});

        if(result.affected === 0){
            return res.status(400).json({message: 'User not found'})
        }
        return res.status(204)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}

export const getUser = async (req: Request, res: Response) => {
   try{ 
        const { id } = req.params;
        const user = await Users.findOneBy({id: parseInt(id)});
        return res.json(user);
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message});
        }
    }
}