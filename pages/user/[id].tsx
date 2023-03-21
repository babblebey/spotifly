import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import { UserIcon, ThreeDotsIcon } from "../../icons";
import PlaylistSection from "../../components/PlaylistSection";
import ArtistSection from "../../components/ArtistSection";
import { useEffect, useState } from "react";
import useScroll, { scrollData } from "../../hooks/useScroll";
import SongListItem from "../../components/SongListItem";
import { getToken } from "next-auth/jwt";
import { useSession, signIn } from "next-auth/react";
import { GetFollowedArtistsResponse, GetUserResponse } from "../../types/spotify-api";
import Image from "next/image";
import Loading from "../../components/Loading";

import sampleData from "../../data/userData.json"

interface UserProps {
    userData: GetUserResponse;
    followedArtistsData: GetFollowedArtistsResponse;
}

const User: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

    const { userData, followedArtistsData }: UserProps = data

    console.log(data)

    return (
        <div>
            <Head>
                <title>Spotifly - { userData.display_name }</title>
            </Head>

            <PageHeader variant="title" title={ userData.display_name } backgroundColor="#121212" />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_max_w_x_padded bg-sdark-el-base-highlight bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="flex items-center justify-center h-52 w-52 mb-2 bg-sdark-el-base shadow-lg shadow-black rounded-full overflow-hidden">
                            { (userData.images.length > 0) ? (
                                <Image src={userData.images[0].url} width={400} height={400} alt={ userData.display_name } className="object-contain" />
                            ) : (
                                <>
                                    <UserIcon width={40} height={40} className="fill-swhite-subdued" />
                                </>
                            ) }
                        </div>
                        <div className="text-white space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Profile
                            </h2>
                            <h2 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                { userData.display_name }
                            </h2>
                            <p className="text-base">
                                1 Public Playlist { followedArtistsData.artists?.total } Following
                            </p>
                        </div>
                    </div>
                </div>

                {/* More Section */}
                <div className="relative">
                    <div className="absolute w-full h-60 bg-gradient-to-b from-bg-sdark-el-base-highlight to-sdark-base opacity-50 -z-10" />
                    <div className="content_max_w_x_padded flex items-center py-6">
                        <button className="group">
                            <ThreeDotsIcon width={22} height={22} className="fill-swhite-subdued group-hover:text-white" />
                        </button>
                    </div>
                </div>
        
                {/* Artists Section */}
                <div className="content_max_w_x_padded space-y-10">
                    {/* <ArtistSection title="Top artist this month" subtitle="Only visible to you" withPlayBtn items={[1,1,1]} hideOverflow /> */}
                </div>

                {/* Songs List */}
                <div className="content_max_w_x_padded mt-10">
                    {/* Heading */}
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="" className="block _title hover:underline">
                                Top tracks this month
                            </a>
                            <span className="text-sm  text-swhite-subdued">
                                Only visible to you
                            </span>
                        </div>
                        <a href="" className="font-bold text-sm text-swhite-subdued hover:underline">
                            Show all
                        </a>
                    </div>

                    {/* List */}
                    <div className="mt-4">
                        {/* {[1,1,1,1].map((_, i) => (
                            <SongListItem key={i} index={i + 1} variant="user" />
                        ))} */}
                    </div>
                </div>

                {/* Artists Section */}
                <div className="content_max_w_x_padded mt-10">
                    <ArtistSection 
                        title="Following" 
                        items={ followedArtistsData.artists?.items } 
                        showAll={{ link: followedArtistsData.artists?.total > 9, route: `/user/${userData.id}/following` }} 
                        hideOverflow
                    />
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default User

export const getServerSideProps: GetServerSideProps = async ({ req, params }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET as string;
    const token = await getToken({ req, secret })
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    const user = await fetch(`https://api.spotify.com/v1/me`, { headers });
    const userData = await user.json();

    const followedArtists = await fetch(`https://api.spotify.com/v1/me/following?type=artist`, { headers });
    const followedArtistsData = await followedArtists.json();

    const data: UserProps = { userData, followedArtistsData };

    return {
        props: { data }
    }
}