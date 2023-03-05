import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import parse from "html-react-parser"
import moment from "moment";
import { ThreeDotsIcon, PlayIcon, PlusCircleIcon } from "../../icons";
import { getToken } from "next-auth/jwt";
import { GetEpisodeResponse } from "../../types/spotify-api";

import sampleData from "../../data/episodeData.json"

const Episode: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data)

    const { id, name, html_description, images, release_date, duration_ms, show } = data as GetEpisodeResponse;

    return (
        <div>
            <Head>
                <title>Spotifly - { name }</title>
            </Head>

            <PageHeader variant="title" title={ name } />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-[#e00818] bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit mb-2 @csm:mb-0 @csm:w-72 shadow-lg shadow-black rounded-2xl overflow-hidden">
                            <Image src={ images[0].url } width={280} height={280} className="object-contain" alt="title" />
                        </div>
                        <div className="w-full text-white space-y-3">
                            <h4 className="font-bold uppercase text-xs relative circle_before before:bg-sblue before:translate-y-1">
                                Episode
                            </h4>
                            <h1 className="text-2xl @cxs:text-3xl @cmd:text-4xl @clg:text-5xl font-black">
                                { name }
                            </h1>
                            <Link href={`/show/${show.id}`} className="block text-lg @cxs:text-sl @cmd:text-2xl font-black mt-3 hover:underline">
                                { show.name }
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Play Section */}
                <div className="relative mb-6">
                    <div className="absolute w-full h-52 bg-gradient-to-b from-[#b02020] to-sdark-bass opacity-50 -z-10" />
                    <div className="content_max_w_x_padded text-swhite-subdued pt-4">
                        <p>
                            <span>
                                { moment(release_date).format('MMM D') }    
                            </span> 
                            {' • '} 
                            <span>
                                { moment(duration_ms).format('mm') }
                            </span>
                        </p>
                    </div>
                    <div className="relative content_max_w_x_padded flex items-center space-x-8 pt-4 pb-6">
                        <button className="play_button bg-sgreen-100 h-14 w-14">
                            <PlayIcon width={28} height={28} />
                        </button>
                        <button>
                            <PlusCircleIcon width={30} height={30} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                        <button>
                            <ThreeDotsIcon width={22} height={22} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                    </div>
                </div>

                {/* Episode Description Section */}
                <div className="content_max_w_x_padded">
                    <div className="max-w-2xl mb-8 space-y-5">
                        <h2 className="_title">
                            Episode Description
                        </h2>

                        <div className="text-swhite-subdued">
                            { parse(html_description) }
                        </div>

                        <Link href={`/show/${show.id}`} className="block">
                            <button className="upgrade-btn">
                                See all episodes
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <PageFooter />   
        </div>
    );
}

export default Episode

export const getServerSideProps: GetServerSideProps = async ({req, params}: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({req, secret});
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }

    // const response = await fetch(`${params?.id}`, { headers });
    // const data = await response.json();
    
    return {
        props: { data: sampleData }
    }
}   