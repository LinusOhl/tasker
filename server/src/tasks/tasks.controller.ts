import { Hono } from "hono";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { createTask, updateTask } from "./tasks.repository";
import {
  type TaskInput,
  type UpdateTaskInput,
  taskSchema,
  updateTaskSchema,
} from "./tasks.schema";

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

app.put(
  "/:id",
  validationMiddleware<UpdateTaskInput>(updateTaskSchema),
  async (c) => {
    try {
      const body = c.req.valid("json");
      const taskId = c.req.param("id");
      const task = await updateTask(body, taskId);
      return c.json(task);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Internal server error" }, 500);
    }
  },
);

export default app;
