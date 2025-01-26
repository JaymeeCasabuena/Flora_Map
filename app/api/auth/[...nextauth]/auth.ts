import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { createSession } from "../../../../lib/session";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      let userExists = await prisma.user.findUnique({
        where: { email: user.email as string },
      });

      if (!userExists) {
        const hashedPassword = await bcrypt.hash(user.id, 10);
        userExists = await prisma.user.create({
          data: {
            email: user.email as string,
            name: user.name as string,
            password: hashedPassword,
          },
        });
      }

      if (userExists) {
        await createSession(userExists.id);
      }

      return true;
    },

    async redirect({ url, baseUrl }) {
      if (url === "/auth" || !url.startsWith(baseUrl)) {
        return baseUrl + "/dashboard";
      }
      return url;
    },
  },
};

export { authOptions };
