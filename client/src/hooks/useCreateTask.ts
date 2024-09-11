import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/task.services";
import type { CreateTaskData } from "../types/task.types";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { taskData: CreateTaskData }) =>
      createTask(variables.taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
