import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "./constants";

export const userSchema = z.object({
  username: z.string().min(3, "username must be more than 3 characters."),
  email: z.string().email("Invalid email address."),
  password: z
    .string()
    .min(6, "password must be more than 6 characters.")
    .max(10, "password must not be more that 10 characters"),
});

export const updateUserSchema = z.object({
  username: z.string().min(3, "username must be more than 3 characters."),
  email: z.string().email("Invalid email address."),
  image: z.union([
    z.string(),
    z
      .any()
      .refine((file) => file?.[0], "Cannot be empty")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max image size is 3MB.`,
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported.",
      ),
  ]),
});
export const updatePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, "password must be more than 6 characters.")
      .max(10, "password must not be more that 10 characters"),
    newPassword: z
      .string()
      .min(6, "password must be more than 6 characters.")
      .max(10, "password must not be more that 10 characters"),
    confirmNewPassword: z
      .string()
      .min(6, "password must be more than 6 characters.")
      .max(10, "password must not be more that 10 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New Password must match cofirm new password",
    path: ["confirmNewPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a correct Email" }),
  password: z.string().nonempty("Enter password"),
});

export type TUserSchema = z.infer<typeof userSchema>;
export type TUpdateUserSchema = z.infer<typeof updateUserSchema>;
export type TUpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
export type TLoginSchema = z.infer<typeof loginSchema>;
