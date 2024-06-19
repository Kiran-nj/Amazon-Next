import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "Ov23limh86ivUvP2cS6U",
      clientSecret: "3740941c59fad5126cc91c0f00e391cf77cf45a1",
    }),
/*     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }), */
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true, // Enable debug mode
});