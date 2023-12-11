import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z
  .object({
    firstnames: z
      .string({
        required_error: "Username is required",
      })
      .min(3, {
        message: "Username must be at least 3 characters",
      }),
    lastnames: z
      .string({
        required_error: "Username is required",
      })
      .min(3, {
        message: "Username must be at least 3 characters",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    rut: z.string().min(7, {
      message: "RUT must be at least 7 characters",
    }),
    address: z.string().min(10, {
      message: "address must be at least 10 characters",
    }),
    phone: z.string().min(5, {
      message: "phone must be at least 10 characters",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
