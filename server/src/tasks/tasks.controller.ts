import { Hono } from "hono";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import {
  createTask,
  getTaskById,
  getTasksByUserId,
  updateTask,
} from "./tasks.repository";
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

app.get("/user/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const tasks = await getTasksByUserId(userId);
    return c.json(tasks);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

app.get("/:taskId", async (c) => {
  try {
    const taskId = c.req.param("taskId");
    const task = await getTaskById(taskId);
    return c.json(task);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
