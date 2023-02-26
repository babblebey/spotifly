import { GetServerSideProps, NextPage, InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import Image from "next/image";
import { PlayIcon, ThreeDotsIcon, TimerIcon, HeartOutlineIcon } from "../../icons";
import SongListItem from "../../components/SongListItem";
import { getToken } from "next-auth/jwt";
import sampleData from "../../data/playlistData.json";
import { GetPlaylistResponse } from "../../types/spotify-api";
import FormatNumber from "../../components/FormatNumber";

const Playlist: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { id, name, description, images, followers, owner, tracks }: GetPlaylistResponse = data;
    const { items, total } = tracks;

    console.log(data);

    const list = [1,2,3,4,5,6,7,8,9,7,8,8,8]

    return (
        <div>
            <Head>
                <title>Spotifly - Playlist title</title>
            </Head>

            <PageHeader variant="playlist" className="bg-transparent" />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-[#605060] bg-opacity-60 pb-10 pt-32">
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
                            <p className="space-x-2">
                                <span className="font-bold hover:underline">
                                    <a href="">{ owner.display_name }</a>
                                </span>
                                <span>
                                    <FormatNumber value={ followers.total } />
                                </span>
                                <span>{ total } Songs</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative">
                    <div className="absolute w-full h-52 bg-gradient-to-b from-[#605060] to-sdark-base opacity-50 -z-10" />
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
                        {items.map((track, i: number) => (
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

    // const response = await fetch(`https://api.spotify.com/v1/playlists/${params?.id}`, {
    //     headers: {
    //         'Authorization': "Bearer " + token?.accessToken
    //     }
    // });
    // const data = await response.json();

    return {
        props: { data: sampleData }
    }
}
  