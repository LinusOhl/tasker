export type Task = {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: number;
  createdById: string;
};

export type CreateTaskData = Omit<Task, "id">;
