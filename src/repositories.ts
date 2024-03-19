import { Repository } from "typeorm";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AppDataSource } from "./data-source";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstates.interface";
import { CategoryRepo } from "./interfaces/categories.interface";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { UserRepo } from "./interfaces/users.interface";

export const userRepo : UserRepo = AppDataSource.getRepository(User)
export const schedulesRepo : ScheduleRepo = AppDataSource.getRepository(Schedule)
export const realEstateRepo : RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const categorieRepo : CategoryRepo = AppDataSource.getRepository(Category)
export const addressRepo : AddressRepo = AppDataSource.getRepository(Address)


