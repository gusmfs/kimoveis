import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),  
    size: z.number().positive(),
    value: z.number().or(z.string()).default(0),
    createdAt: z.string(),
    updatedAt : z.string(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().positive().int()
})
export const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,

})

export const readRealEstateSchema = realEstateSchema.array()
