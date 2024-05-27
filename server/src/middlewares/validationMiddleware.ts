import { validator } from "hono/validator";
import type { ZodType } from "zod";

export const validationMiddleware = <T>(
  schema: ZodType<T>,
  errorMessage = "Invalid input",
) => {
  return validator("json", (value, c) => {
    const parsed = schema.safeParse(value);

    if (!parsed.success) {
      return c.json({ error: errorMessage, details: parsed.error.errors }, 400);
    }

    return parsed.data;
  });
};
