import { Category } from "../entities";
import AppError from "../errors/AppError.error";
import {
  CreateCategory,
  ReadAllCategory,
} from "../interfaces/categories.interface";
import { categorieRepo } from "../repositories";

export const createCategoryService = async (
  data: CreateCategory
): Promise<Category> => {
  return await categorieRepo.save(data);
};

export const readCategoryService = async (): Promise<ReadAllCategory> => {
  return await categorieRepo.find();
};

export const readRealEstateByCategoryService = async (
  id: number
): Promise<Category> => {
  const category: Category | null = await categorieRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });
  if (!category) throw new AppError("Category not found", 404);

  return category;
};
