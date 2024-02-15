import { z } from 'zod';

const addToCardValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    buyerId: z.string(),
    buyerName: z.string().min(1),
    productImg: z.string(),
    productPrice: z.number(),
  }),
});

export default addToCardValidationSchema;
