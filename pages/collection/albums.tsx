import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistCard from "../../components/PlaylistCard";
import PlaylistSection from "../../components/PlaylistSection";

import sampleData from "../../data/userAlbumsData.json"
import { GetUsersSavedAlbumsResponse } from "../../types/spotify-api";

interface AlbumsProps {
    
}

const Albums: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data)
    const { items } = data as GetUsersSavedAlbumsResponse

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" backgroundColor="#070707" />

            <main className="content section @container space-y-5">
                <div className="flex items-center">
                    <h2 className="_title">
                        Albums
                    </h2>
                </div>

                <div className="items @container/section-items gap-y-6">
                    { items.map((item, i) => (
                        <PlaylistCard key={i} item={ item.album } withPlayBtn />
                    )) }
                </div>
            </main>

            <PageFooter />
        </div>    
    )
}   

export default Albums

export const getServerSideProps: GetServerSideProps = async ({ req }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    // const response = await fetch(`https://api.spotify.com/v1/me/albums`, { headers });
    // const data = await response.json();

    return {
        props: { data: sampleData }
    }
}