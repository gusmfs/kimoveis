import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController, readAllUsersController, softDeleteUserController, updateUserController } from "../controller/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const usersRoutes : Router = Router()
usersRoutes.post('/', verifyUniqueUserEmail,verifyBody(createUserSchema) ,createUserController)
usersRoutes.get('/', verifyToken, verifyAdmin, readAllUsersController)
usersRoutes.patch('/:id', verifyToken, verifyUserExists ,verifyPermissions, verifyBody(updateUserSchema), updateUserController)
usersRoutes.delete('/:id', verifyToken, verifyUserExists, verifyPermissions , softDeleteUserController)