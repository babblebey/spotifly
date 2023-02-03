import { FC } from "react";
import Image from "next/image";
import { HeartOutlineIcon, PlayIcon, ThreeDotsIcon } from "../icons";

interface SongListItemProps {
    
}
 
const SongListItem: FC<SongListItemProps> = () => {
    return ( 
        <div className="grid grid-cols-8 group hover:bg-sdark-el-base-highlight rounded select-none">
            <div className="col-span-6 px-2 py-1 flex items-center">
                <div className="relative w-10 h-10 mr-4">
                    <Image src={'/m1.jfif'} width={60} height={60} alt="title" className="w-full" />
                    <button className="hidden group-hover:block absolute w-full h-full top-0 bg-black bg-opacity-60">
                        <PlayIcon color="white" width={20} height={20} className="m-auto" />
                    </button>
                </div>

                <div className="text-ellipsis">
                    <p className="text-white text-ellipsis">
                        Song Title
                    </p>
                    <a href="" className="text-swhite-subdued group-hover:text-white text-sm hover:underline">
                        Artist
                    </a>
                </div>
            </div>

            <div className="col-span-2 p-2 flex items-center justify-end text-swhite-subdued w-fit justify-self-end">
                <button className="mr-2 invisible group-hover:visible">
                    <HeartOutlineIcon color="#a7a7a7" width={16} height={16} />
                </button>
                <p className="ml-6 mr-4 text-sm">
                    0:00
                </p>
                <button className="mr-2 invisible group-hover:visible">
                    <ThreeDotsIcon color="#a7a7a7" width={16} height={16} />
                </button>
            </div>
        </div>
     );
}
 
export default SongListItem;