import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z.string().email({ message: "Please enter a correct Email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(300, { message: "Message must not be more than 300 characters" }),
});

export type TmessageSchema = z.infer<typeof messageSchema>;
