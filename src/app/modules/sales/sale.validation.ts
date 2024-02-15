import { z } from 'zod';

const saleValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    quantity: z.number().positive(),
    buyerName: z.string().min(1),
    saleDate: z.string(),
    productPrice: z.number(),
  }),
});

export default saleValidationSchema;
