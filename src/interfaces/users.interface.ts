import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";
import { z } from "zod";
import { createUserSchema, userLoginSchema, userReturnSchema, userWithoutAdmin } from "../schemas/users.schema";

export type UserRepo = Repository<User>
export type UserCreate = z.infer<typeof createUserSchema>
export type userWithoutAdmin = z.infer<typeof userWithoutAdmin>
export type UserBodyUpdate = Omit<UserCreate, 'admin'>
export type UserUpdate = DeepPartial<UserBodyUpdate>
export type UserReturn = z.infer<typeof userReturnSchema>
export type UserLogin = z.infer<typeof userLoginSchema>
export type LoginReturn = {token : string}
export type UserWithoutPassword = z.infer<typeof userReturnSchema>
export type UserRead = UserReturn[]