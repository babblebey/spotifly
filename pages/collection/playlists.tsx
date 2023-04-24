import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import Head from "next/head";
import { useRouter } from "next/router";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistCard from "../../components/PlaylistCard";
import { PlayIcon } from "../../icons";
import { GetCurrentUserPlaylistResponse, GetUsersSavedTracksResponse } from "../../types/spotify-api";

import sampleData from "../../data/navbarUserPlaylistData.json"
import sampleDataT from "../../data/userTracksData.json"

interface PlaylistsProps {
    playlistsData: GetCurrentUserPlaylistResponse;
    tracksData: GetUsersSavedTracksResponse;
}

const Playlists: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => { 
    const router = useRouter();

    console.log(data);

    const { playlistsData, tracksData }: PlaylistsProps = data;

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
                        {/* Top Card - Lists Users Liked Songs  */}
                        <div className="top_card group bg-gradient-to-br from-[#450af5] to-[#8e8ee5] cursor-pointer"
                            onClick={() => router.push('/collection/tracks')}
                        >
                            <div className="grow">
                                <div className="line-clamp-3">
                                    { tracksData.items.map((item, i) => (
                                        <span key={i} className="font-medium text-white space-x-1">
                                            <span>
                                                { item.track.artists[0].name }
                                            </span>
                                            {' '}
                                            <span className="opacity-70">
                                                { item.track.name }
                                            </span>
                                            {' • '}
                                        </span>
                                    )) }
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a href="" className="text-3xl font-black">
                                    Liked Songs
                                </a>
                                <p>
                                    { tracksData.total } liked songs
                                </p>
                            </div>
                            <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-4 shaodow-lg shadow-sdark-53">
                                <PlayIcon width={24} height={24} />
                            </button>
                        </div>

                        {/* List */}
                        { playlistsData.items.map((item, i) => (
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

    // const playlists = await fetch(`https://api.spotify.com/v1/me/playlists`, { headers });
    // const playlistsData = await playlists.json()

    // const tracks = await fetch(`https://api.spotify.com/v1/me/tracks`, { headers });
    // const tracksData = await tracks.json();

    const data: PlaylistsProps = {
        playlistsData: sampleData,
        tracksData: sampleDataT,
    }

    return {
        props: { data }
    }
}