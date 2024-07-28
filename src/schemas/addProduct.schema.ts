import { z } from "zod";

// ! schema for add product
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
  quantity: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price must be a number greater than 0",
    }),
  description: z
    .string()
    .min(1, { message: "Product description is required" }),
});

// ! schema for update product
export const updateProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  category: z.string().min(1, { message: "Category is required" }).optional(),
  image: z
    .any()
    .refine((file) => file instanceof File && file.size > 0, {
      message: "Image is required",
    })
    .optional(),
  price: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === "string" ? parseFloat(val) : val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Price must be a number greater than 0",
    })
    .optional(),
  quantity: z
    .union([z.string(), z.number()])
    .transform((val) => (typeof val === "string" ? parseFloat(val) : val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Quantity must be a number greater than 0",
    })
    .optional(),
  description: z
    .string()
    .min(1, { message: "Product description is required" })
    .optional(),
});
