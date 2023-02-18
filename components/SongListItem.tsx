import { FC } from "react";
import Image from "next/image";
import { HeartOutlineIcon, PlayIcon, ThreeDotsIcon } from "../icons";

interface SongListItemProps {
    index?: number,
    variant: 'artist' | 'playlist' | 'search' | 'album' | 'track' | 'user'
}
 
const SongListItem: FC<SongListItemProps> = ({ index, variant }) => {
    const artist: boolean = variant === 'artist';
    const playlist: boolean = variant === 'playlist';
    const search: boolean = variant === 'search';
    const album: boolean = variant === 'album';
    const track: boolean = variant === 'track';
    const user: boolean = variant === 'user';

    return ( 
        <div className={
            `grid 
            ${ search && 'grid-cols-8'} 
            ${(artist || playlist || album || user) && 'gap-x-4 px-5 text-swhite-subdued text-sm py-1'} 
            ${(artist || user) && 'grid-cols-aslist'} ${playlist && 'grid-cols-plist'} 
            ${album && 'grid-cols-albslist'} 
            group hover:bg-sdark-el-base-highlight rounded select-none`
        }>
            {/* List Number - Renders for Stated Variant(s) */}
            {(playlist || artist || album || user) && (
                <div className="w-full flex items-center">
                    <p className="flex flex-col items-center justify-center">
                        <span className="visible group-hover:invisible">
                            { index }
                        </span>
                        <span className="absolute invisible group-hover:visible">
                            <PlayIcon color="white" width={16} height={16} />
                        </span>
                    </p>
                </div>
            )}
            
            <div className={`${search && 'col-span-6 px-2'} py-1 flex items-center`}>
                {/* Song Image - Renders for all Variant except stated Variant (album) */}
                {!album && (
                    <div className="relative w-10 h-10 mr-4">
                        <Image src={'/m1.jfif'} width={60} height={60} alt="title" className="w-full" />
                        {search && (
                            <button className="hidden group-hover:block absolute w-full h-full top-0 bg-black bg-opacity-60">
                                <PlayIcon color="white" width={20} height={20} className="m-auto" />
                            </button>
                        )}
                    </div>
                )}

                <div className="text-ellipsis flex flex-col">
                    <a href="" className={`${(album || artist || user) && 'font-bold text-base'} text-white text-ellipsis hover:underline`}>
                        Song Title
                    </a>

                    {/* Artist Name - Renders for all Variant except stated Variant (album) */}
                    {!artist && (
                        <a href="" className="text-swhite-subdued group-hover:text-white text-sm hover:underline">
                            Artist
                        </a>
                    )}
                </div>
            </div>

            {/* Song Listens Count - Renders for Stated Variant(s)  */}
            {artist && (
                <div className="col-span-1 px-2 py-1 flex items-center">
                    <p className="text-sm text-swhite-subdued group-hover:text-white ">
                        1,111,000
                    </p>
                </div>
            )}

            {/* Album Name - Renders for Stated Variant(s) */}
            {(playlist || user) && (
                <div className="px-2 py-1 flex items-center">
                    <p className="text-sm text-swhite-subdued group-hover:text-white ">
                        Album name
                    </p>
                </div>
            )}

            {/* Song Date - Renders for Stated Variant(s) */}
            {playlist && (
                <div className="px-2 py-1 flex items-center">
                    <p className="text-sm text-swhite-subdued group-hover:text-white ">
                        00-00-00
                    </p>
                </div>
            )}

            {/* Like Button, Duration and More Button */}
            <div className={`${search && 'col-span-2'} p-2 flex items-center justify-end text-swhite-subdued w-fit justify-self-end`}>
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