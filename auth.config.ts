import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      picture?: string;
    } & Omit<User, "id">;
  }
}

export const authConfig = {
  debug: true,
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      credentials: { password: { label: "Password", type: "password" } },
      authorize(c) {
        if (c?.password !== "1") return null;
        return {
          name: "Fill Murray",
          email: "bill@fillmurray.com",
          image: "https://www.fillmurray.com/64/64",
          id: "1",
        };
      },
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {},
    //   async authorize(credentials): Promise<any> {
    //     return await signInWithEmailAndPassword(
    //       auth,
    //       (credentials as any).email || "",
    //       (credentials as any).password || ""
    //     )
    //       .then((userCredential) => {
    //         if (userCredential.user) {
    //           return userCredential.user;
    //         }
    //         return null;
    //       })
    //       .catch((error) => console.log(error));
    //   },
    // }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
