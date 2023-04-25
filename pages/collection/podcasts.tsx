import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import Head from "next/head";
import { useRouter } from "next/router";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistCard from "../../components/PlaylistCard";
import { PlayIcon } from "../../icons";
import { GetUsersSavedEpisodesResponse, GetUsersSavedShowsResponse } from "../../types/spotify-api";

import sampleData from "../../data/userShowsData.json"
import sampleDataT from "../../data/userEpisodesData.json"

interface PodcastsProps {
    showsData: GetUsersSavedShowsResponse;
    episodesData: GetUsersSavedEpisodesResponse;
}

const Podcasts: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()

    console.log(data);

    const { showsData, episodesData }: PodcastsProps = data;

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" backgroundColor="#070707" />

            <main className="content @container">
                <div className="space-y-5 section">
                    <div className="flex items-center">
                        <p className="_title">
                            Podcasts
                        </p>
                    </div>

                    <div className="items gap-y-6">
                        {/* Top Card */}
                        <div className="top_card group bg-gradient-to-br from-[#00644e] to-[#27856a] cursor-pointer"
                            onClick={() => router.push('/collection/episodes')}
                        >
                            <div className="grow">
                                <div className="line-clamp-3">
                                    { episodesData?.items.map((item, i) => (
                                        <span key={i} className="font-medium text-white space-x-1">
                                            <span>
                                                { item.episode.show.name }
                                            </span>
                                            {' '}
                                            <span>
                                                { item.episode.name }
                                            </span>
                                            {' • '}
                                        </span>
                                    )) }
                                </div>
                            </div>
                            <div className="space-y-2">
                                <a href="" className="text-3xl font-black">
                                    Your Episodes
                                </a>
                                <p>
                                    9 episodes
                                </p>
                            </div>
                            <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-4 shaodow-lg shadow-sdark-53">
                                <PlayIcon width={24} height={24} />
                            </button>
                        </div>

                        {/* List */}
                        { showsData?.items.map((item, i) => (
                            <PlaylistCard key={i} item={ item.show } />
                        )) }
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>    
    )
}   

export default Podcasts

export const getServerSideProps: GetServerSideProps = async ({req}: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    // const shows = await fetch(`https://api.spotify.com/v1/me/shows` ,{ headers });
    // const showsData = await shows.json();

    // const episodes = await fetch(`https://api.spotify.com/v1/me/episodes` ,{ headers });
    // const episodesData = await episodes.json();

    // const data: PodcastsProps = { showsData, episodesData };

    const data: PodcastsProps = { showsData: sampleData, episodesData: sampleDataT }

    return {
        props: { data }
    }
}