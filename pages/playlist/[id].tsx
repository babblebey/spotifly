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
import { GetPlaylistResponse } from "../../types/spotify-api";
import { PlayIcon, ThreeDotsIcon, TimerIcon, HeartOutlineIcon } from "../../icons";
import Loading from "../../components/Loading";
import { useSession, signIn } from "next-auth/react";
import { usePalette } from "react-palette";

import sampleData from "../../data/playlistData.json";

const Playlist: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { status } = useSession();
    const { data: palette } = usePalette(data.images[0].url)
    
    // Loading Status
    if (status === 'loading') {
        return <Loading />
    }
    
    // Not LoggedIn Status
    if (status === 'unauthenticated') {
        signIn();
        
        return <Loading />
    }

    const { id, name, description, images, followers, owner, tracks } = data as GetPlaylistResponse;

    console.log(data);

    return (
        <div>
            <Head>
                <title>Spotifly - { name }</title>
            </Head>

            <PageHeader variant="playlist" title={ name } backgroundColor={palette?.darkMuted} />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-opacity-60 pb-10 pt-32"
                    style={{ backgroundColor: palette?.darkMuted }}
                >
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit @csm:w-72 shadow-lg shadow-black">
                            <Image src={ images[0]?.url } width={280} height={280} className="object-contain" alt="title" />
                        </div>
                        <div className="w-full text-white text-sm space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Playlist
                            </h2>
                            <h3 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                { name }
                            </h3>
                            <p>
                                { description }
                            </p>
                            <div className="flex space-x-2">
                                <Link href={`/artist/${ owner.id }`} className="font-bold hover:underline">
                                    { owner.display_name }
                                </Link>
                                <span>
                                    <FormatNumber value={ followers.total } />
                                </span>
                                <span>
                                    { tracks.total } Songs
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative">
                    <div className="absolute w-full h-52 opacity-50 -z-10" 
                        style={{ background: `linear-gradient(to bottom, ${ palette?.darkMuted }, #121212)` }}
                    />
                    <div className="relative content_max_w_x_padded flex items-center space-x-7 py-6">
                        <button className="play_button bg-sgreen-100 h-14 w-14">
                            <PlayIcon width={28} height={28} />
                        </button>
                        <button>
                            <HeartOutlineIcon color="#a7a7a7" width={28} height={28} />
                        </button>
                        <button>
                            <ThreeDotsIcon color="#a7a7a7" width={22} height={22} />
                        </button>
                    </div>
                </div>

                {/* Songs List */}
                <div>
                    {/* Heading */}
                    <div className="content_max_w_x_padded sticky top-16 z-30 group text-swhite-subdued uppercase text-sm">
                        <div className="grid grid-cols-plist gap-x-4 px-5 py-3 mb-3 border-b border-swhite-subdued">
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
                    <div className="content_max_w_x_padded">
                        {tracks.items.map((track: Item, i: number) => (
                            <SongListItem key={i} data={ track } variant="playlist" index={i + 1} />
                        ))}
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Playlist

export const getServerSideProps: GetServerSideProps = async ({ req, params }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET as string;
    const token = await getToken({ req, secret })
    const headers = { 'Authorization': "Bearer " + token?.accessToken }

    // const response = await fetch(`https://api.spotify.com/v1/playlists/${params?.id}`, { headers });
    // const data = await response.json();

    return {
        props: { data: sampleData }
    }
}
  