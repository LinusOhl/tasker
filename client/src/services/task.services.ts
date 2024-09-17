import { BASE_URL } from "../helpers";
import type { CreateTaskData, Task, UpdateTaskData } from "../types/task.types";

export const createTask = async (taskData: CreateTaskData): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error("An error occurred while creating the task");
    }

    const data = (await response.json()) as Task;
    return data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw new Error("An error occurred while creating the task");
  }
};

export const fetchTasksByUserId = async (userId: string): Promise<Task[]> => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/user/${userId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("An error occurred while fetching tasks");
    }

    const data = (await response.json()) as Task[];
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error("An error occurred while fetching tasks");
  }
};

export const fetchTaskById = async (taskId: string): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("An error occurred while fetching task");
    }

    const data = (await response.json()) as Task;
    return data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw new Error("An error occurred while fetching task");
  }
};

export const updateTask = async (
  taskId: string,
  taskData: UpdateTaskData,
): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error("An error occurred while updating task");
    }

    const data = (await response.json()) as Task;
    return data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw new Error("An error occurred while updating task");
  }
};
