import { Request, Response } from "express";
import { createUserService, readAllUsersService, softDeleteUserService, updateUserService } from "../services/users.service";

export const createUserController = async(req: Request, res: Response): Promise<Response> => {
    const user = await createUserService(req.body)
    
    return res.status(201).json(user)
}
export const readAllUsersController = async(req: Request, res: Response): Promise<Response> => {
    const users = await readAllUsersService()

    return res.status(200).json(users)
}

export const updateUserController = async(req: Request, res: Response): Promise<Response> => {
    const {user} = res.locals

    const userUpdate = await updateUserService(req.body, user)

    return res.status(200).json(userUpdate)
}
export const softDeleteUserController = async(req: Request, res: Response): Promise<Response> => {
    const {user} = res.locals

    await softDeleteUserService(user)

    return res.status(204).json()
}