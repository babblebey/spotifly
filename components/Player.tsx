import Image from "next/image";
import { FC } from "react";
import { DeviceIcon, HeartOutlineIcon, NextIcon, PictureInPictureIcon, PlayIcon, PreviousIcon, QueueIcon, RepeatIcon, ShuffleIcon, SpeakerIcon } from "../icons";

interface PlayerProps {
    
}
 
const Player: FC<PlayerProps> = () => {
    return ( 
        <div className="fixed w-full h-[90px] bottom-0 border-t border-sdark-subdued bg-sdark-base text-white">
            <div className="w-full h-full py-2 px-2 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center">
                    <Image src={'/t1.jfif'} width={56} height={56} alt="" className="mr-4" />
                    <div className="flex flex-col space-y-1 mr-8">
                        <a href="" className="text-sm font-bold hover:underline">
                            Song title
                        </a>
                        <a href="" className="text-xs text-swhite-subdued hover:text-white hover:underline">
                            Artist
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button>
                            <HeartOutlineIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                        <button>
                            <PictureInPictureIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                    </div>
                </div>

                {/* Center Section */}
                <div className="w-4/12 space-y-2">
                    <div className="flex items-center space-x-6 justify-center">
                        <button>
                            <ShuffleIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                        <button>
                            <PreviousIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                        <button className="play_button bg-white h-8 w-8">
                            <PlayIcon width={20} height={20} />
                        </button>
                        <button>
                            <NextIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                        <button>
                            <RepeatIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-2xs text-swhite-subdued">
                            1:02
                        </span>
                        <div className="relative group h-1 w-full rounded-sm bg-sdark-subdued">
                            <div className="absolute rounded-sm left-0 w-[40%] h-full bg-white group-hover:bg-sgreen-100 flex items-center">
                                <div className="w-3 h-3 rounded-full bg-white absolute -right-1 invisible group-hover:visible" />
                            </div>
                        </div>
                        <span className="text-2xs text-swhite-subdued">
                            3:06
                        </span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <button>
                        <QueueIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                    </button>
                    <button>
                        <DeviceIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                    </button>
                    <button>
                        <SpeakerIcon width={16} height={16} className="fill-swhite-subdued hover:fill-white" />
                    </button>
                    <div className="relative group h-1 w-24 rounded-sm bg-sdark-subdued">
                        <div className="absolute rounded-sm left-0 w-[40%] h-full bg-white group-hover:bg-sgreen-100 flex items-center">
                            <div className="w-3 h-3 rounded-full bg-white absolute -right-1 invisible group-hover:visible" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Player;