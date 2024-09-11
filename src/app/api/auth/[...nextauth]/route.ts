import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/server/db";

const handler = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => {
      console.log("session", session);
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };
