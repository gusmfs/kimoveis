import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { usersRoutes } from './routes/users.routes';
import { sessionRoutes } from './routes/session.routes';
import { schedulesRoutes } from './routes/schedules.routes';
import { realEstateRoutes } from './routes/realEstate.routes';
import { categoriesRoutes } from './routes/categories.routes';
import { handleError } from './middlewares/handleError.middleware';

const app = express();
app.use(express.json());
app.use('/users', usersRoutes)
app.use('/login', sessionRoutes)
app.use('/schedules', schedulesRoutes)
app.use('/realEstate', realEstateRoutes)
app.use('/categories', categoriesRoutes)
app.use(handleError)
export default app;
