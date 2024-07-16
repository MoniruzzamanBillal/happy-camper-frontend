import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  image: z.any().refine((file) => file instanceof File && file.size > 0, {
    message: "Image is required",
  }),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price must be a number greater than 0",
    }),
  description: z
    .string()
    .min(1, { message: "Product description is required" }),
});
