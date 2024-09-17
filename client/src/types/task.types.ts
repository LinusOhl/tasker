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
  status?: string;
  priority?: number;
};

export type CreateTaskData = Omit<Task, "id" | "createdAt" | "updatedAt">;
