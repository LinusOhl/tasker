import type { TASK_PRIORITY, TASK_STATUS } from "../helpers";

export type Task = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description?: string;
  status: string;
  priority: number;
  createdById: string;
};

export type UpdateTaskData = {
  title?: string;
  description?: string;
  status?: TASK_STATUS;
  priority?: TASK_PRIORITY;
};

export type CreateTaskData = Omit<Task, "id" | "createdAt" | "updatedAt">;
