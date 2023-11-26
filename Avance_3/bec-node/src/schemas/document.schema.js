import { z } from "zod";

export const createDocumentSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  author: z.string({
    required_error: "Author is required",
  }),
  year: z.number({
    required_error: "Year is required",
  }),
  img: z.string({
    required_error: "Img is required",
  }),
  type: z.number({
    required_error: "Type is required",
  }),
  genre: z.number({
    required_error: "Genre is required",
  }),
  price: z.number({
    required_error: "Price is required",
  })
});
