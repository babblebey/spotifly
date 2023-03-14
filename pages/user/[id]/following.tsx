import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { NextPage } from 'next'
import PageHeader from "../../../components/PageHeader"
import PageFooter from "../../../components/PageFooter"
import ArtistSection from "../../../components/ArtistSection"
import { getToken } from "next-auth/jwt"
import { GetFollowedArtistsResponse } from "../../../types/spotify-api"
import { authOptions } from "../../api/auth/[...nextauth]"
import { getSession, signIn, useSession } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/dist/server/api-utils"
import Loading from "../../../components/Loading"

const Following: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { status } = useSession();
    
    // Loading Status
    if (status === 'loading') {
        return <Loading />
    }

    // Not LoggedIn Status
    if (status === 'unauthenticated') {
        signIn();

        return <Loading />
    }

    console.log(data)
    const artists = data?.artists as GetFollowedArtistsResponse;

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Following</title>
            </Head>

            <PageHeader variant="title" />

            <main className="content @container">
                <ArtistSection title="Following" items={ artists?.items }  />
            </main>

            <PageFooter />
        </div>   
    )
}

export default Following

export const getServerSideProps: GetServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken };

    const response = await fetch(`https://api.spotify.com/v1/me/following?type=artist`, { headers });
    const data = await response.json();

    return {
        props: { data }
    }
}

