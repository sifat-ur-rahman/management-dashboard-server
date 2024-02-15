import { NextFunction, Request, Response } from 'express';
import { AddToCardService } from './addToCard.service';

const createAddToCard = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const AddToCardData = req.body;

    const result = await AddToCardService.createAddToCardIntoDB(AddToCardData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'AddToCard created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllAddToCardById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await AddToCardService.getAddToCardByUserFromDB(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'AddToCard By user ID retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const AddToProductControllers = {
  createAddToCard,
  getAllAddToCardById,
};
