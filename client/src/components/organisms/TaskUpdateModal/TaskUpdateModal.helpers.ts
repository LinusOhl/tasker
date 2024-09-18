import { TASK_PRIORITY, TASK_STATUS } from "../../../helpers";

export const TASK_STATUS_LABELS = {
  [TASK_STATUS.NOT_STARTED]: "Not started",
  [TASK_STATUS.IN_PROGRESS]: "In progress",
  [TASK_STATUS.COMPLETED]: "Completed",
};

export const TASK_PRIORITY_LABELS = {
  [TASK_PRIORITY.LOW]: "Low",
  [TASK_PRIORITY.MEDIUM]: "Medium",
  [TASK_PRIORITY.HIGH]: "High",
};
