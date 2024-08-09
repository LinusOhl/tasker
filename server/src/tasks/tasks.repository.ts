import { PrismaClient, type Task, TaskStatus } from "@prisma/client";
import type { TaskInput } from "./tasks.schema";
const prisma = new PrismaClient();

export const createTask = async (data: TaskInput): Promise<Task> => {
  try {
    const taskStatus = TaskStatus[data.status as keyof typeof TaskStatus];
    const task = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: taskStatus,
        priority: data.priority,
        createdBy: {
          connect: {
            id: data.createdById,
          },
        },
      },
    });
    return task;
  } finally {
    await prisma.$disconnect();
  }
};
