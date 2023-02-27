import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import Head from "next/head";
import Image from "next/image";
import EpisodeCard from "../../components/EpisodeCard";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import { ThreeDotsIcon, PlayIcon, ShareIcon, PlusCircleIcon } from "../../icons";
import moment from "moment";
import parse from "html-react-parser"

import sampleData from "../../data/showData.json";
import { GetShowResponse } from "../../types/spotify-api";

const Show: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data)

    const { id, name, publisher, description, html_description, episodes, images } = data as GetShowResponse;
    const upNext = episodes.items[0];

    return (
        <div>
            <Head>
                <title>Spotifly - Podcast</title>
            </Head>  

            <PageHeader variant="playlist" className="bg-transparent" />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-[#e00818] bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit mb-2 @csm:mb-0 @csm:w-72 shadow-lg shadow-black rounded-2xl overflow-hidden">
                            <Image src={ images[0].url } width={280} height={280} className="object-contain" alt="title" />
                        </div>
                        <div className="w-full text-white space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Podcast
                            </h2>
                            <h2 className="text-4xl @cxs:text-6xl @cmd:text-7xl font-black">
                                { name }
                            </h2>
                            <p className="text-lg @cxs:text-xl @cmd:text-2xl font-black">
                                { publisher }
                            </p>
                        </div>
                    </div>
                </div>

                {/* Follow Section */}
                <div className="relative">
                    <div className="absolute w-full h-60 bg-gradient-to-b from-[#e00818] to-sdark-base opacity-50 -z-10" />
                    <div className="content_max_w_x_padded flex items-center space-x-7 py-6">
                        <button className="border border-white text-white text-sm px-4 py-1 rounded font-bold uppercase">
                            Follow
                        </button>
                        <button className="group">
                            <ThreeDotsIcon width={22} height={22} className="fill-swhite-subdued group-hover:fill-white" />
                        </button>
                    </div>
                </div>

                <div className="content_max_w_x_padded @cmd:max-w-screen-2xl flex flex-col-reverse @cmd:flex-row justify-between @cmd:space-x-12">
                    <div className="@csm:max-w-2xl @cmd:w-8/12 @cmd:max-w-full">
                        {/* Next Episode */}
                        <div className="group h-fit bg-sdark-el-base-highlight bg-opacity-40 hover:bg-opacity-60 text-swhite-subdued p-4 -mx-2 @csm:-mx-4 rounded space-y-3 text-sm">
                            <p>Up next</p>
                            <a href="" className="text-white text-base block font-bold hover:underline relative circle_before before:bg-sblue before:translate-y-2">
                                { upNext.name }
                            </a>
                            <p className="line-clamp-2">
                                { upNext.description }
                            </p>

                            <div className="flex items-center justify-between pt-3 pb-2">
                                <div className="flex items-center space-x-5">
                                    <button className="play_button bg-sgreen-100 h-8 w-8">
                                        <PlayIcon width={20} height={20} />
                                    </button>
                                    <p>
                                        <span>
                                            { moment(upNext.release_date).format('MMM D') }    
                                        </span> 
                                        {' • '} 
                                        <span>
                                            { moment(upNext.duration_ms).format('mm') }
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center space-x-6 invisible group-hover:visible">
                                    <button>
                                        <ShareIcon width={24} height={24} className="fill-swhite-subdued hover:fill-white" />
                                    </button>
                                    <button>
                                        <PlusCircleIcon width={24} height={24} className="fill-swhite-subdued hover:fill-white" />
                                    </button>
                                    <button>
                                        <ThreeDotsIcon width={18} height={18} className="fill-swhite-subdued hover:fill-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* All Episodes */}
                        <div className="mt-5">
                            <h2 className="_title mb-4">
                                All Episodes
                            </h2>

                            { episodes.items.map((episode, i) => (
                                <EpisodeCard key={i} data={ episode } />
                            )) }
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="@csm:max-w-2xl @cmd:w-4/12 @cmd:max-w-full mb-8 space-y-4">
                        <h2 className="_title">
                            About
                        </h2>
                        <div className="text-swhite-subdued">
                            { parse(html_description) }
                        </div>
                        <button className="text-white bg-sdark-el-base-highlight py-2 px-3 rounded-full text-sm">
                            Comedy
                        </button>
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Show

export const getServerSideProps: GetServerSideProps = async ({ req, params }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    // const response = await fetch(`https://api.spotify.com/v1/shows/${params?.id}`, { headers })
    // const data = await response.json();

    return {
        props: { data: sampleData }
    }
}