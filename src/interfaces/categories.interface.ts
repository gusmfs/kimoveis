import { Repository } from "typeorm";
import { Category } from "../entities";
import { z } from "zod";
import { createCategorySchema, readAllCategorySchema } from "../schemas/categories.schema";

export type CategoryRepo = Repository<Category>
export type CreateCategory = z.infer<typeof createCategorySchema>
export type ReadAllCategory = z.infer<typeof readAllCategorySchema>