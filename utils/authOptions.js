import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";

// This is the configuration for NextAuth.js, which handles authentication in the app.
// It uses Google as the authentication provider.
// The client ID and client secret are stored in environment variables for security.
// Make sure to set these environment variables in your .env file or hosting platform.
// The client ID and client secret are required for Google authentication.
// You can find them in the Google Cloud Console after creating your OAuth 2.0 credentials.
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // The authorization URL for Google authentication.
      // It includes parameters for requesting offline access and consent.
      // The prompt parameter is set to "consent" to ensure the user is prompted for consent.
      // The access_type parameter is set to "offline" to request a refresh token.
      // The response_type parameter is set to "code" to request an authorization code.
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoke on successful sign-in.
    async signIn({ profile }) {
      //1. connect to the database
      await connectDB();
      //2. check if the user already exists
      const userExists = await User.findOne({ email: profile.email });
      //3. if not, create a new user
      if (!userExists) {
        //Truncate username if too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //4. return true to allow sign-in
      return true;
    },
    // Session callback to customize the session object.
    async session({ session }) {
      //1. get the user from the database
      const user = await User.findOne({ email: session.user.email });
      //2. Assign user id from the session
      session.user.id = user._id.toString();
      //3. return the session object
      return session;
    },
  },
};
