import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import { ThreeDotsIcon, PlayIcon, PlusCircleIcon } from "../../icons";

interface EpisodeProps {

}

const Episode: NextPage<EpisodeProps> = ({  }) => {
    return (
        <div>
            <Head>
                <title>Spotifly - Episode</title>
            </Head>

            <PageHeader variant="playlist" isLoggedIn className="bg-transparent" />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-[#e00818] bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit mb-2 @csm:mb-0 @csm:w-72 shadow-lg shadow-black rounded-2xl overflow-hidden">
                            <Image src={'/sh1.jfif'} width={280} height={280} className="object-contain" alt="title" />
                        </div>
                        <div className="w-full text-white space-y-3">
                            <h4 className="font-bold uppercase text-xs relative circle_before before:bg-sblue before:translate-y-1">
                                New Podacst Episode
                            </h4>
                            <h1 className="text-2xl @cxs:text-3xl @cmd:text-4xl font-black">
                                Podcast Episode Title | Ep. 259
                            </h1>
                            <p className="text-lg @cxs:text-sl @cmd:text-2xl font-black ">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Play Section */}
                <div className="relative mb-6">
                    <div className="absolute w-full h-52 bg-gradient-to-b from-[#b02020] to-sdark-bass opacity-50 -z-10" />
                    <div className="content_max_w_x_padded text-swhite-subdued pt-4">
                        <p>
                            <span>Feb 6</span> {' '} <span>1hr 1min</span>
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
                        <p className="text-swhite-subdued">
                            For 20% Off + Free Shipping use code SNG at Manscaped.com
                            <br /><br />
                            This Week The Guys Discuss:
                            <br /><br />
                            0:00, What's A Secret The Group Chat Doesn't Know About?
                            <br /><br />
                            23:35, Intro
                            <br /><br />
                            25:25, Fun Fact
                            <br /><br />
                            32:40, Last Of Us
                            <br /><br />
                            42:21, Trash News
                            <br /><br />
                            44:50, Does Fuhad Miss James?
                            <br /><br />
                            52:40, Babby Daddy Scammed Out Of $300
                            <br /><br />
                            56:23, Tweets Of The Week.
                            <br /><br />
                            JOIN THE SHXTSNGIGS CULT BABIES PATREON https://www.patreon.com/shxtsngigs
                            <br /><br />
                            BRAND NEW SNG MERCH https://www.shxtsngigsstore.com/
                            <br /><br />
                            Listen to SNG on:
                            <br /><br />
                            SPOTIFY https://open.spotify.com/show/6olvQhNhQwMbGG26t3rVgM?si=GvC4B1meTXWb8eMf4qTXAQ
                            <br /><br />
                            APPLE PODCASTS https://podcasts.apple.com/gb/podcast/shxtsngigs/id1481898329
                        </p>
                        <button className="upgrade-btn">
                            See all episodes
                        </button>
                    </div>
                </div>
            </main>

            <PageFooter isLoggedIn />   
        </div>
    );
}

export default Episode