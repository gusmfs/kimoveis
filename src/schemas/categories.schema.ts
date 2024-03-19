import { z } from "zod";

export const categorieSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45)
})

export const createCategorySchema = categorieSchema.omit({id: true})
export const readAllCategorySchema = categorieSchema.array()