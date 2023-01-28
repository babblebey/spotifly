import Image from "next/image";
import { FC } from "react"
import { PlayIcon } from "../icons";

interface ArtistCardProps {
    
}
 
const ArtistCard: FC<ArtistCardProps> = () => {
    return ( 
        <div className="max-w-[200px] pt-3 pb-6 px-4 rounded space-y-3 group bg-sdark-el-base hover:bg-sdark-el-base-highlight">
            <div className="relative">
                <Image src={'/a1.jfif'} width={200} height={200} alt="title" className="rounded-full shadow-2xl shadow-black" />
                <button className="play_button_hide_show h-12 w-12 shadow-lg shadow-sdark-el-base">
                    <PlayIcon width={24} height={24} />
                </button>
            </div>
            <div className="space-y-1">
                <a href="" className="font-bold text-white text-lg">
                    Artist Name
                </a>
                <p className="text-swhite-subdued text-xs md:text-sm lg:text-base">
                    Artist
                </p>
            </div>
        </div>
     );
}
 
export default ArtistCard;