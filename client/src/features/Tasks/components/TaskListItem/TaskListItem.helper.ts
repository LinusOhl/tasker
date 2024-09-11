import { TASK_STATUS } from "../../../../helpers";

export const getStatusColor = (status: string) => {
  switch (status) {
    case TASK_STATUS.IN_PROGRESS:
      return "yellow";
    case TASK_STATUS.NOT_STARTED:
      return "gray";
    case TASK_STATUS.COMPLETED:
      return "green";
    default:
      return "black";
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case TASK_STATUS.NOT_STARTED:
      return "Not started";
    case TASK_STATUS.IN_PROGRESS:
      return "In progress";
    case TASK_STATUS.COMPLETED:
      return "Completed";
    default:
      return "Unknown";
  }
};
