export const BASE_URL = "http://localhost:3000";

export enum TASK_STATUS {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
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
