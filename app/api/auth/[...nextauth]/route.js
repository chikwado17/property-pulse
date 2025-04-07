import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// This code exports the NextAuth handler for handling authentication requests.
// The handler is used for both GET and POST requests.
// The GET request is typically used for signing in and redirecting the user to the authentication provider.
// The POST request is used for handling the callback after authentication.
// The handler is responsible for managing the authentication flow and session management.
// It uses the NextAuth library to handle authentication and session management.
