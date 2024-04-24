import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

export async function SaveChatHistory({ title, input, response }) {
  const chat = await PrismaClient.chat.create({
    title,
    input,
    response,
  });
}

export async function fetchChatHistory(title) {
  const chat = await PrismaClient.chat.findUnique({
    where: {
      title,
    },
  });
}
