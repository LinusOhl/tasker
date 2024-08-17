import { BASE_URL } from "../helpers";
import type { User } from "../types/users.types";

export const createUser = async (id: string, email: string): Promise<User> => {
  console.log(id, email);
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, email, name: "no_name" }),
    });

    if (!response.ok) {
      throw new Error("An error occurred while creating the user");
    }

    const data = (await response.json()) as User;
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("An error occurred while creating the user");
  }
};
