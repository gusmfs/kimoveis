import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";
import { createRealEstateController, readRealEstateController } from "../controller/realEstate.controller";
import { createRealEstateSchema } from "../schemas/realEstates.schema";

export const realEstateRoutes : Router = Router()
realEstateRoutes.post('/', verifyToken, verifyAdmin, verifyBody(createRealEstateSchema), verifyAddressExists, createRealEstateController)
realEstateRoutes.get('/', readRealEstateController)
