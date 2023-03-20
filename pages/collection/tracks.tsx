import { GetServerSideProps, NextPage, InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import SongListItem from "../../components/SongListItem";
import FormatNumber from "../../components/FormatNumber";
import { Item } from "../../types/spotify-api/GetPlaylistResponse";
import { getToken } from "next-auth/jwt";
import { GetUsersSavedTracksResponse } from "../../types/spotify-api";
import { PlayIcon, ThreeDotsIcon, TimerIcon, HeartOutlineIcon, HeartIcon } from "../../icons";
import { useEffect, useState } from "react";
import useScroll, { scrollData } from "../../hooks/useScroll";

import sampleData from "../../data/userTracksData.json";

const Tracks: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { items, total } = data as GetUsersSavedTracksResponse;
    const [scrolled, setScrolled] = useState(false);

    console.log(data);

    useEffect(() => {
        useScroll({
            element: document.querySelector('.page') as HTMLElement,
            callback({ scrollTop }: scrollData) {
                scrollTop > 300 ? setScrolled(true) : setScrolled(false);
            }
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Spotifly - Liked Songs</title>
            </Head>

            <PageHeader variant="playlist" title="Liked Songs" backgroundColor="#5038a0" />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-[#5038a0] bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-52 @csm:w-72 h-52 @cmd:h-60 shadow-xl shadow-sdark-base">
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
                                <HeartIcon width={80} height={80} />
                            </div>
                        </div>
                        <div className="w-full text-white text-sm space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Playlist
                            </h2>
                            <h3 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                Liked Songs
                            </h3>
                            <div className="flex space-x-2">
                                {/* <Link href={`/artist/${ owner.id }`} className="font-bold hover:underline">
                                    { owner.display_name }
                                </Link> */}
                                <span>
                                    { total } Songs
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative">
                    <div className="absolute w-full h-52 bg-gradient-to-b from-[#5038a0] to-sdark-base opacity-50 -z-10" />
                    <div className="relative content_max_w_x_padded flex items-center space-x-7 py-6">
                        <button className="play_button bg-sgreen-100 h-14 w-14">
                            <PlayIcon width={28} height={28} />
                        </button>
                    </div>
                </div>

                {/* Songs List */}
                <div>
                    {/* Heading */}
                    <div className={`${scrolled && 'bg-sdark-base border-b border-sdark-subdued'} content_max_w_x_padded sticky top-16 z-30 group text-swhite-subdued uppercase text-sm`}>
                        <div className={`grid grid-cols-plist gap-x-4 px-5 py-3 ${!scrolled && 'border-b border-sdark-subdued'}`}>
                            <div className="w-fit">
                                #
                            </div>
                            <div>
                                Title
                            </div>
                            <div className="px-2">
                                Album
                            </div>
                            <div className="px-2">
                                Date Added
                            </div>
                            <div className="justify-self-end mr-12">
                                <TimerIcon color="#a7a7a7" width={18} height={18} />
                            </div>
                        </div>
                    </div>

                    {/* List */}
                    <div className="content_max_w_x_padded mt-3">
                        {items.map((track, i) => (
                            <SongListItem key={i} data={ track } variant="playlist" index={i + 1} />
                        ))}
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Tracks

export const getServerSideProps: GetServerSideProps = async ({ req }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET as string;
    const token = await getToken({ req, secret })
    const headers = { 'Authorization': "Bearer " + token?.accessToken }

    // const response = await fetch(`https://api.spotify.com/v1/me/tracks`, { headers });
    // const data = await response.json();

    return {
        props: { data: sampleData }
    }
}