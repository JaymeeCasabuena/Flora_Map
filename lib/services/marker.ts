import "server-only";
import { PrismaClient } from "@prisma/client";
import { verifySession } from "../dal";

const prisma = new PrismaClient();

export async function getMarkers() {
  const { userId } = await verifySession();
  const markers = await prisma.location.findMany({
    where: {
      authorId: {
        equals: userId,
      },
    },
  });

  return markers;
}
