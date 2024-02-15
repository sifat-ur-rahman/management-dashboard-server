import { Types } from 'mongoose';

export type TAddToCard = {
  productId: Types.ObjectId;
  buyerName: string;
  buyerId: Types.ObjectId;
  productImg: string;
  productPrice: number;
};
