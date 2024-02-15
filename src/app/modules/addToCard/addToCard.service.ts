/* eslint-disable @typescript-eslint/no-explicit-any */
//import { TAddToCard } from './addToCard.interface';
import { AddToCard } from './addToCard.model';

const createAddToCardIntoDB = async (AddToCardData: any) => {
  const result = await AddToCard.create(AddToCardData);
  return result;
};

const getAddToCardByUserFromDB = async (id: string) => {
  const result = await AddToCard.find({ buyerId: id });
  return result;
};

export const AddToCardService = {
  createAddToCardIntoDB,
  getAddToCardByUserFromDB,
};
