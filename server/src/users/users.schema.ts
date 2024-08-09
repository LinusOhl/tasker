import { z } from "zod";

export type UserInput = {
  id: string;
  email: string;
  name: string;
};

// Zod schema
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
});
