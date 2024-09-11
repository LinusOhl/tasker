import { useQuery } from "@tanstack/react-query";
import { fetchTasksByUserId } from "../services/task.services";

export const useTasksByUserId = (userId: string) => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasksByUserId(userId),
  });
};
