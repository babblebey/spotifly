import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import ArtistSection from "../../components/ArtistSection";
import { getToken } from "next-auth/jwt";
import { GetFollowedArtistsResponse } from "../../types/spotify-api";

interface ArtistsProps {
    items: object[]
}

const Artists: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data)

    const { artists } = data as GetFollowedArtistsResponse;

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" />

            <main className="content @container">
                <ArtistSection 
                    title="Artists" 
                    items={ artists.items }
                    withPlayBtn
                />
            </main>

            <PageFooter />
        </div>    
    )
}   

export default Artists

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const secret = process.env.NEXTAUTH_SECRET as string;
    const token = await getToken({ req, secret })
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    const response = await fetch(`https://api.spotify.com/v1/me/following?type=artist`, { headers })
    const data = await response.json();

    return {
        props: { data }
    }
}