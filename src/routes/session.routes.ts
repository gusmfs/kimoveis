import { Router } from "express";
import { loginController } from "../controller/session.controller";

export const sessionRoutes : Router = Router()
sessionRoutes.post('/', loginController)