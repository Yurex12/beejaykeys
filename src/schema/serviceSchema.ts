import { z } from "zod";

export const serviceSchema = z.object({
  description: z
    .string()
    .min(10, { message: "Descrition must be at least 10 characters." }),
  roles: z.string(),
});

export type TserviceSchema = z.infer<typeof serviceSchema>;
