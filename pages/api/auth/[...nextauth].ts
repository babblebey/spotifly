import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const refreshAccessToken = async (token: { refreshToken: any }) => {
    try {
        const url = "https://accounts.spotify.com/api/token" + 
            new URLSearchParams({
                client_id: process.env.SPOTIFY_CLIENT_ID as string,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
                grant_type: 'refresh_token',
                refresh_token: token.refreshToken,
            })
        
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })

        const refreshedTokens = await response.json();

        if(!response.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshedToken: refreshedTokens.refresh_token ?? token.refreshToken
        }
    } catch (error) {
        console.log(error);

        return {
            ...token,
            error: "RefreshAccessTokenError"
        }
    }
}

export const authOptions = {
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
        })
    ],

    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    accessToken: account.access_token,
                    accessTokenExpires: Date.now() + account.expires_in * 1000,
                    refreshedToken: account.refresh_token,
                    user
                }
            }

            if (Date.now() < token.accessTokenExpires) {
                return token
            }

            return refreshAccessToken(token)
        },

        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            session.error = token.error;

            return session
        }
    }
}

export default NextAuth(authOptions);
