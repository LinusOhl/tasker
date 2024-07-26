import type { Task } from "../types/LocalDB.types";

export const getTasks = async () => {
  try {
    const response = await fetch("http://localhost:3000/tasks");

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const data = (await response.json()) as Task[];
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (task: Task) => {
  try {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  } catch (error) {
    console.error(error);
  }
};
