import { FC } from "react";
import Image from "next/image";
import { ThreeDotsIcon, PlayIcon, PlusCircleIcon, ShareIcon } from "../icons";

interface EpisodeCardProps {
    
}
 
const EpisodeCard: FC<EpisodeCardProps> = () => {
    return ( 
        <>
            <hr className="border-t-2 border-sdark-el-base-highlight"/>
            <div className="group flex px-4 -mx-2 @cmd:-mx-4 py-5 -my-1 space-x-5 rounded-md text-swhite-subdued hover:bg-sdark-el-base-highlight">
                <div className="w-3/12 @csm:w-28 @cmd:h-28">
                    <Image src={'/sh1.jfif'} width={150} height={150} alt="title" className="object-contain rounded-xl" />
                </div>
                <div className="w-9/12 @csm:w-full space-y-2">
                    <a href="" className="font-bold text-base text-white hover:underline relative circle_before before:bg-sblue before:translate-y-2">
                        What's A Secret The Group Chat Doesn't Know About? | Ep 258 | ShxtnGigs Podcast
                    </a>
                    <p className="line-clamp-2">
                        What's A Secret The Group Chat Doesn't Know About? 23:35, Intro 25:25, Fun Fact 32:40, Last Of Us 42:21, Trash News 44:50, Does Fuhad Miss James? 52:40, Babby Daddy Scammed Out Of $300 56:23, Tweets Of The Week. JOIN THE SHXTSNGIGS CULT BABIES PATREON https://www.patreon.com/shxtsngigs BRAND NEW SNG MERCH https://www.shxtsngigsstore.com/ Listen to SNG on: SPOTIFY https://open.spotify.com/show/6olvQhNhQwMbGG26t3rVgM?si=GvC4B1meTXWb8eMf4qTXAQ APPLE PODCASTS https://podcasts.apple.com/gb/podcast/shxtsngigs/id1481898329
                    </p>
                    <div className="flex items-centet justify-between pt-3 pb-2">
                        <div className="flex items-center space-x-5">
                            <button className="play_button h-8 w-8">
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
            </div>
        </>
     );
}
 
export default EpisodeCard;