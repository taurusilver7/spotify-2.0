import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    // console.log("REFRESHED TOKEN IS", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000, // 1hr as 3600 returns from spotify API.
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // replace if new one came back else fall back to the old refresh token.
    };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers.
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here.
  ],
  secret: process.env.JWT_SECRET,
  // custom login page.
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // 1. initial sign in.
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refeshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // handling expiry time in ms.
        };
      }

      // Once logged in, Return previous token if the access token has not expired yet.
      if (Date.now() < token.accessTokenExpires) {
        console.log("EXISTING ACCESS TOKEN IS VALID");
        return token;
      }
      // Access token expires, refresh it.
      console.log("ACCESS TOKEN & SESSION HAS EXPIRED, REFRESHING...");

      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      // If access token expires, refresh it.
      // A session object created for user to tap into as part of client session.
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
