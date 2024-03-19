import { Request, Response } from "express";
import { createCategoryService, readCategoryService, readRealEstateByCategoryService } from "../services/category.service";

export const createCategoryController = async (req: Request, res: Response) : Promise<Response> => {
    const category = await createCategoryService(req.body)

    return res.status(201).json(category)
}

export const readCategoryController = async (req: Request, res: Response) : Promise<Response> => {
    const categoryRead  = await readCategoryService()

    return res.status(200).json(categoryRead)
}
export const readRealEstatesByCategoryController = async (req: Request, res: Response) : Promise<Response> => {
    const {id} = req.params
    const realEstates = await readRealEstateByCategoryService(Number(id))

    return res.status(200).json(realEstates)
}