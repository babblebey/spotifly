import { GetServerSideProps, NextPage, InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import SongListItem from "../../components/SongListItem";
import FormatNumber from "../../components/FormatNumber";
import { Item } from "../../types/spotify-api/GetPlaylistResponse";
import { GetUsersSavedEpisodesResponse } from "../../types/spotify-api";
import { PlayIcon, ThreeDotsIcon, TimerIcon, HeartOutlineIcon, HeartIcon, BookmarkIcon } from "../../icons";
import { useEffect, useState } from "react";
import useScroll, { scrollData } from "../../hooks/useScroll";

import sampleData from "../../data/userEpisodesData.json";
import { getToken } from "next-auth/jwt";
import EpisodeCard from "../../components/EpisodeCard";

const Episodes: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { items, total } = data as GetUsersSavedEpisodesResponse;

    console.log(data);

    return (
        <div>
            <Head>
                <title>Spotifly - Your Episodes</title>
            </Head>

            <PageHeader variant="playlist" title="Your Episodes" backgroundColor="#006450" />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-[#006450] bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-52 @csm:w-72 h-52 @cmd:h-60 shadow-xl shadow-sdark-base">
                            <div className="w-full h-full flex items-center justify-center bg-[#006450] rounded-md">
                                <BookmarkIcon width={80} height={80} className="fill-sgreen-200" />
                            </div>
                        </div>
                        <div className="w-full text-white text-sm space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Playlist
                            </h2>
                            <h3 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                Your Episodes
                            </h3>
                            <div className="flex space-x-2">
                                {/* <Link href={`/artist/${ owner.id }`} className="font-bold hover:underline">
                                    { owner.display_name }
                                </Link> */}
                                <span>
                                    { total } Episodes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative">
                    <div className="absolute w-full h-52 bg-gradient-to-b from-[#006450] to-sdark-base opacity-50 -z-10" />
                    <div className="relative content_max_w_x_padded flex items-center space-x-7 py-6">
                        <button className="play_button bg-sgreen-100 h-14 w-14">
                            <PlayIcon width={28} height={28} />
                        </button>
                    </div>
                </div>

                {/* Episodes List */}
                <div className="content_max_w_x_padded mt-3">
                    <div className="@csm:max-w-2xl @csm:w-8/12 @cmd:max-w-full">
                        { items.map((item, i) => (
                            <EpisodeCard key={i} data={ item.episode } />
                        )) }
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Episodes

export const getServerSideProps: GetServerSideProps = async ({ req }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET as string;
    const token = await getToken({ req, secret })
    const headers = { 'Authorization': "Bearer " + token?.accessToken }

    // const response = await fetch(`https://api.spotify.com/v1/me/episodes`, { headers });
    // const data = await response.json();

    return {
        props: { data: sampleData }
    }
}