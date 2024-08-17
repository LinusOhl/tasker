import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/users.services";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (variables: { id: string; email: string }) =>
      createUser(variables.id, variables.email),
  });
};
