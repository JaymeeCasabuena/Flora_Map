import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { createSession } from "../../../../lib/session";

const prisma = new PrismaClient();
const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId:
        process.env.NODE_ENV === "production"
          ? (process.env.GITHUB_CLIENT_ID as string)
          : (process.env.GITHUB_CLIENT_ID_DEV as string),
      clientSecret:
        process.env.NODE_ENV === "production"
          ? (process.env.GITHUB_CLIENT_SECRET as string)
          : (process.env.GITHUB_CLIENT_SECRET_DEV as string),
    }),
  ],
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
