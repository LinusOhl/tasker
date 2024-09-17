import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/task.services";
import type { UpdateTaskData } from "../types/task.types";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { taskId: string; taskData: UpdateTaskData }) =>
      updateTask(variables.taskId, variables.taskData),
    onSuccess: (variables) => {
      queryClient.invalidateQueries({
        queryKey: ["taskById", { taskId: variables.id }],
      });
    },
  });
};
