import { Schema, model } from 'mongoose';
import { TAddToCard } from './addToCard.interface';

const addToCardSchema = new Schema<TAddToCard>(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    buyerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    buyerName: { type: String, required: true },
    productImg: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const AddToCard = model<TAddToCard>('AddToCard', addToCardSchema);
