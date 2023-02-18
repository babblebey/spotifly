import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EpisodeCard from "../../components/EpisodeCard";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import { ThreeDotsIcon, PlayIcon, ShareIcon, PlusCircleIcon } from "../../icons";

interface ShowProps {

}

const Show: NextPage<ShowProps> = ({}) => {
    return (
        <div>
            <Head>
                <title>Spotifly - Podcast</title>
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
                            <h2 className="font-bold uppercase text-xs">
                                Podcast
                            </h2>
                            <h2 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                Podcast Title
                            </h2>
                            <p className="text-lg @cxs:text-xl @cmd:text-2xl font-black">
                                Author
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
                                What's A Secret The Group Chat Doesn't Know About? | Ep 259 | ShxtnGigs Podcast
                            </a>
                            <p className="line-clamp-2">
                                For 20% Off + Free Shipping use code SNG at Manscaped.com This Week The Guys Discuss: 0:00, What's A Secret The Group Chat Doesn't Know About? 23:35, Intro 25:25, Fun Fact 32:40, Last Of Us 42:21, Trash News 44:50, Does Fuhad Miss James? 52:40, Babby Daddy Scammed Out Of $300 56:23, Tweets Of The Week. JOIN THE SHXTSNGIGS CULT BABIES PATREON https://www.patreon.com/shxtsngigs BRAND NEW SNG MERCH https://www.shxtsngigsstore.com/ Listen to SNG on: SPOTIFY https://open.spotify.com/show/6olvQhNhQwMbGG26t3rVgM?si=GvC4B1meTXWb8eMf4qTXAQ APPLE PODCASTS https://podcasts.apple.com/gb/podcast/shxtsngigs/id1481898329
                            </p>

                            <div className="flex items-center justify-between pt-3 pb-2">
                                <div className="flex items-center space-x-5">
                                    <button className="play_button bg-sgreen-100 h-8 w-8">
                                        <PlayIcon width={20} height={20} />
                                    </button>
                                    <p>
                                        <span>Feb 6</span> {' '} <span>1hr 1min</span>
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

                            <EpisodeCard />
                            <EpisodeCard />
                            <EpisodeCard />
                            <EpisodeCard />
                            <EpisodeCard />
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="@csm:max-w-2xl @cmd:w-4/12 @cmd:max-w-full mb-8 space-y-4">
                        <h2 className="_title">
                            About
                        </h2>
                        <p className="text-swhite-subdued">
                            ShxtsNGigs is a weekly podcast featuring best friends James and Fuhad. They try to give their full, unfiltered opinion on anything that comes to mind. It can be raw, it might be offensive but its always hilarious!
                        </p>
                        <button className="text-white bg-sdark-el-base-highlight py-2 px-3 rounded-full text-sm">
                            Comedy
                        </button>
                    </div>
                </div>
            </main>

            <PageFooter isLoggedIn />
        </div>
    )
}

export default Show