import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { AddToProductControllers } from './addToCard.controller';
import addToCardValidationSchema from './addToCard.validation';

//import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/api/addToCard',
  //auth('user'),
  validateRequest(addToCardValidationSchema),
  AddToProductControllers.createAddToCard,
);

router.get('/api/addToCard/:id', AddToProductControllers.getAllAddToCardById);

export const AddToCardRoute = router;
