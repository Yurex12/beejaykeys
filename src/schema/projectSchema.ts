import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "./constants";

export const projectSchema = z.object({
  name: z.string().min(1, { message: "This is required" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" }),

  workedAs: z
    .array(
      z.object({
        id: z.string(),
        name: z.string().nonempty("Tag cannot be empty"),
        className: z.string(),
      }),
    )
    .nonempty("Please add at least one skill"),
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
