import { z } from "zod";

enum TaskStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export type TaskInput = {
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: number;
  createdById: string;
};

export type UpdateTaskInput = {
  title?: string;
  description?: string | null;
  status?: TaskStatus;
  priority?: number;
};

// Zod schema
export const taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().nullable(),
  status: z.enum([
    TaskStatus.NOT_STARTED,
    TaskStatus.IN_PROGRESS,
    TaskStatus.COMPLETED,
  ]),
  priority: z.number().int(),
  createdById: z.string().min(1),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().nullable().optional(),
  status: z
    .enum([
      TaskStatus.NOT_STARTED,
      TaskStatus.IN_PROGRESS,
      TaskStatus.COMPLETED,
    ])
    .optional(),
  priority: z.number().int().optional(),
});
