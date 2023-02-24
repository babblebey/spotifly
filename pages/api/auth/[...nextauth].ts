import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

async function refreshAccessToken(token) {
    try {
        const url = "https://accounts.spotify.com/api/token?" + new URLSearchParams({
                client_id: process.env.SPOTIFY_CLIENT_ID as string,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
                grant_type: "refresh_token",
                refresh_token: token.refreshToken,
            });
        
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
        });
    
        const refreshedTokens = await response.json();
    
        if (!response.ok) {
            throw refreshedTokens;
        }
    
        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
        };
    } catch (error) {
        console.log(error);
    
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: {
                url: "https://accounts.spotify.com/authorize",
                params: {
                    scope: "user-read-email,user-modify-playback-state,playlist-read-private,streaming,user-read-private,user-library-read,user-library-modify,user-read-playback-state,user-modify-playback-state,user-read-recently-played,user-follow-read"
                }
            }
        }),
    ],

    callbacks: {
        async jwt({ token, user, account }) {
            // Initial sign in
            if (account && user) {
                return {
                    accessToken: account.access_token,
                    accessTokenExpires: Date.now() + account.expires_in * 1000,
                    refreshToken: account.refresh_token,
                    user,
                };
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < token.accessTokenExpires) {
                return token;
            }

            // Access token has expired, try to update it
            return refreshAccessToken(token);
        },
        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            session.error = token.error

            return session
        }
    },
    
    pages: {
        signIn: '/auth/signin'
    }
}

export default NextAuth(authOptions);