import { Address, Category, RealEstate } from "../entities";
import AppError from "../errors/AppError.error";
import {
  CreateRealEstate,
} from "../interfaces/realEstates.interface";
import { addressRepo, categorieRepo, realEstateRepo } from "../repositories";

export const createRealEstateService = async (
  data: CreateRealEstate
): Promise<RealEstate> => {
  const category: Category | null = await categorieRepo.findOneBy({
    id: data.categoryId,
  });
  if (!category) throw new AppError("Category not found", 404);
  const address: Address = await addressRepo.save(data.address);
  const realEstate: RealEstate = await realEstateRepo.save({
    ...data,
    address: address!,
    category: category!,
  });
  return realEstate;
};
export const readRealEstateService = async (): Promise<any> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};
