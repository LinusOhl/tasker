import { PrismaClient, type Task, TaskStatus } from "@prisma/client";
import type { TaskInput, UpdateTaskInput } from "./tasks.schema";

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

export const updateTask = async (
  data: UpdateTaskInput,
  taskId: string,
): Promise<Task> => {
  try {
    const taskStatus = TaskStatus[data.status as keyof typeof TaskStatus];
    const task = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title: data.title,
        description: data.description,
        status: taskStatus,
        priority: data.priority,
      },
    });
    return task;
  } finally {
    await prisma.$disconnect();
  }
};

export const getTasksByUserId = async (userId: string): Promise<Task[]> => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        createdById: userId,
      },
    });
    return tasks;
  } finally {
    await prisma.$disconnect();
  }
};

export const getTaskById = async (taskId: string): Promise<Task | null> => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
    return task;
  } finally {
    await prisma.$disconnect();
  }
};
