import Image from "next/image";
import { FC } from "react";
import { PlayIcon } from "../icons";
import PlaylistSection from "./PlaylistSection";
import SongListItem from "./SongListItem";

interface SearchResultProps {
    
}
 
const SearchResult: FC<SearchResultProps> = () => {
    return ( 
        <div className="content_max_w_x_padded pt-4 space-y-10">
            {/* Top Section */}
            <div className="section">
                <div className="grid grid-cols-2 gap-y-6 search_result_top">
                    {/* Top Result */}
                    <div className="col-span-2 space-y-5">
                        <p className="_title">
                            Top Result
                        </p>
                        <div className="relative group bg-sdark-el-base hover:bg-sdark-el-base-highlight p-5 rounded text-white flex flex-col select-none">
                            <div className="h-24 w-24">
                                <Image src={'/ar1.jfif'} width={200} height={200} alt="title" className="rounded-full w-full" />
                            </div>
                            <div className="flex items-center mt-6">
                                <p className="font-black text-3xl leading-none">
                                    Title
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 mt-3 text-sm">
                                {false && <p className="text-swhite-subdued">
                                    Name
                                </p>}
                                <button className="bg-sdark-base font-bold uppercase rounded-full py-1 px-3">
                                    Artist
                                </button>
                            </div>
                            <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-4 shadow-lg shadow-sdark-base">
                                <PlayIcon width={24} height={24} />
                            </button>
                        </div>
                    </div>

                    {/* Songs */}
                    <div className="songs_search_result space-y-5">
                        <h2 className="_title">
                            Songs
                        </h2>

                        <div>
                            <SongListItem variant="search" />
                            <SongListItem variant="search" />
                            <SongListItem variant="search" />
                            <SongListItem variant="search" />
                        </div>
                    </div>
                </div>
            </div>

            <PlaylistSection title="Featuring Wizkid" hideOverflow />
            <PlaylistSection title="Featuring Wizkid" hideOverflow />
        </div>
     );
}
 
export default SearchResult;