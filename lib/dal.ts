import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "./session";
import { redirect } from "next/navigation";
import { cache } from "react";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/auth");
  }

  return { isAuth: true, userId: String(session.userId) };
});
