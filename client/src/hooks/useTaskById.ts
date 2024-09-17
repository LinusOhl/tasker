import { useQuery } from "@tanstack/react-query";
import { fetchTaskById } from "../services/task.services";

export const useTaskById = (taskId: string) => {
  return useQuery({
    queryKey: ["taskById", { taskId: taskId }],
    queryFn: () => fetchTaskById(taskId),
  });
};
