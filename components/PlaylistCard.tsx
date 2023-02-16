import Image from "next/image";
import { FC } from "react";
import { PlayIcon } from "../icons";

interface PlaylistCardProps {
    container?: boolean
    withPlayBtn?: boolean
}

const PlaylistCard: FC<PlaylistCardProps> = ({ container, withPlayBtn }) => {
    return (
        <div className={`playlist_card group ${ container && 'section_item' }`}>
            <div className="relative rounded overflow-hidden">
                <Image src={'/p4.jfif'} width={200} height={200} alt='title' className="w-full" />

                {/* Renders when true */}
                {withPlayBtn && (
                    <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-2 shadow-lg shadow-sdark-53">
                        <PlayIcon width={24} height={24} />
                    </button>
                )}
            </div>
            <div className="space-y-1">
                <a href="" className="font-bold text-white text-lg">
                    Playlist title
                </a>
                <p className="text-swhite-subdued text-xs md:text-sm lg:text-base line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus veritatis, animi omnis exercitationem.
                </p>
            </div>
        </div>
        
    );
}
 
export default PlaylistCard;