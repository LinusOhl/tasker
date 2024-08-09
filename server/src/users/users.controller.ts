import { Hono } from "hono";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { createUser } from "./users.repository";
import { type UserInput, userSchema } from "./users.schema";

const app = new Hono();

app.post("/", validationMiddleware<UserInput>(userSchema), async (c) => {
  try {
    const body = c.req.valid("json");
    const user = await createUser(body);
    return c.json(user);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
