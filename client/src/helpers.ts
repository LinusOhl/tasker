import type { Task } from "./types/task.types";

export const BASE_URL = "http://localhost:3000";

export enum TASK_STATUS {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum TASK_PRIORITY {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
}

export const getTaskStatusEnum = (status: string) => {
  switch (status) {
    case "Not started":
      return TASK_STATUS.NOT_STARTED;
    case "In progress":
      return TASK_STATUS.IN_PROGRESS;
    case "Completed":
      return TASK_STATUS.COMPLETED;
    default:
      return TASK_STATUS.NOT_STARTED;
  }
};

export const getTaskPriorityNbr = (priority: string) => {
  switch (priority) {
    case "Low":
      return 0;
    case "Medium":
      return 1;
    case "High":
      return 2;
    default:
      return 0;
  }
};

export const filterAndSortTasks = (
  tasks: Task[],
  searchInput: string,
  selectedStatus: string,
  selectedPriority: string,
  sortBy: string,
  isAscending: boolean,
) => {
  return tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const matchesStatus =
        selectedStatus === "All" || task.status === selectedStatus;
      const matchesPriority =
        selectedPriority === "All" ||
        task.priority === Number(selectedPriority);
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (sortBy === "title") {
        return isAscending
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else if (sortBy === "created") {
        return isAscending
          ? Number(new Date(a.createdAt)) - Number(new Date(b.createdAt))
          : Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));
      }
      return 0;
    });
};
