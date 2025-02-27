import { z } from "zod";

export const linkSchema = z.object({
  url: z.string().url({ message: "Enter a valid url" }),
});

export type TlinkSchema = z.infer<typeof linkSchema>;
