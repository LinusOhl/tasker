import { PrismaClient, type User } from "@prisma/client";
import type { UserInput } from "./users.schema";
const prisma = new PrismaClient();

export const createUser = async (data: UserInput): Promise<User> => {
  try {
    const user = await prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        name: data.name,
      },
    });
    return user;
  } finally {
    await prisma.$disconnect();
  }
};
