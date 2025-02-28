import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1, { message: "This is required" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" }),
  workedAs: z.string().min(1, { message: "This field is required." }),
  imageUrl: z.string().min(1, { message: "This field is required" }),
  status: z.enum(["done", "in-progress"], {
    errorMap: () => ({
      message: "status can either be done or in progress.",
    }),
  }),
  pitch: z
    .string()
    .min(20, { message: "Pitch must be at least 20 characters" }),
});

export type TprojectSchema = z.infer<typeof projectSchema>;
