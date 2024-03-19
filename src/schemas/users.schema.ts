import { z } from "zod";
//

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().min(1).max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
})
export const createUserSchema = userSchema.omit({
    id:true,
    createdAt:true,
    updatedAt:true,
    deletedAt:true,
})
export const userWithoutAdmin = createUserSchema.omit({admin: true})
export const updateUserSchema = userWithoutAdmin.partial()
export const userReturnSchema = userSchema.omit({password: true})
export const userReadSchema = userReturnSchema.array()
export const userLoginSchema = userSchema.pick({
    email: true,
    password: true,
})









