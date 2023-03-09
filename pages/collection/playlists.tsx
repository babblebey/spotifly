import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistCard from "../../components/PlaylistCard";
import { PlayIcon } from "../../icons";
import { GetCurrentUserPlaylistResponse } from "../../types/spotify-api";

import sampleData from "../../data/navbarUserPlaylistData.json"

interface PlaylistsProps {
    
}

const Playlists: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => { 
    console.log(data);

    const { items } = data as GetCurrentUserPlaylistResponse;

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" />

            <main className="content @container">
                <div className="space-y-5 section">
                    <div className="flex items-center">
                        <p className="_title">
                            Playlists
                        </p>
                    </div>

                    <div className="items gap-y-6">
                        {/* Top Card */}
                        <div className="top_card group bg-gradient-to-br from-[#450af5] to-[#8e8ee5]">
                            <div className="grow">

                            </div>
                            <div className="space-y-2">
                                <a href="" className="text-3xl font-black">
                                    Liked Songs
                                </a>
                                <p>
                                    9 liked songs
                                </p>
                            </div>
                            <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-4 shaodow-lg shadow-sdark-53">
                                <PlayIcon width={24} height={24} />
                            </button>
                        </div>

                        {/* List */}
                        { items.map((item, i) => (
                            <PlaylistCard key={i} item={ item } withPlayBtn />
                        )) }
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>    
    )
}   

export default Playlists

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    // const response = await fetch(`https://api.spotify.com/v1/me/playlists`, { headers });
    // const data = await response.json()

    return {
        props: { data: sampleData }
    }
}