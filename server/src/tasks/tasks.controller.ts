import { Hono } from "hono";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { createTask } from "./tasks.repository";
import { type TaskInput, taskSchema } from "./tasks.schema";

const app = new Hono();

app.post("/", validationMiddleware<TaskInput>(taskSchema), async (c) => {
  try {
    const body = c.req.valid("json");
    const task = await createTask(body);
    return c.json(task);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
