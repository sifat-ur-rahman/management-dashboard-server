import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import { SaleRoute } from './app/modules/sales/sale.route';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { ProductRoute } from './app/modules/product/product.route';
import { UserRoute } from './app/modules/user/user.route';
import { AuthRoutes } from './app/modules/auth/auth.route';
import { AddToCardRoute } from './app/modules/addToCard/addToCard.route';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: 'https://management-dashboard-sandy.vercel.app',
    credentials: true,
  }),
);

//http://localhost:5173
//https://timely-cannoli-fe9bd7.netlify.app
//application route.

app.use('/', ProductRoute);
app.use('/', SaleRoute);
app.use('/', AddToCardRoute);
app.use('/', UserRoute);
app.use('/', AuthRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
  });
});
//route error handler
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  });
});

app.use(globalErrorHandler);
export default app;
