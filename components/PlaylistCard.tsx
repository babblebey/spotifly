import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PlayIcon } from "../icons";
import { Item as GetArtistAlbumsResponseItem } from "../types/spotify-api/GetArtistAlbumsResponse";
import { Item as GetCurrentUserPlaylistResponseItem } from "../types/spotify-api/GetCurrentUserPlaylistResponse";
import { Album as GetUsersSavedAlbumResponseItem } from "../types/spotify-api/GetUsersSavedAlbumsResponse";
import { Show as GetUsersSavedShowsResponseItem } from "../types/spotify-api/GetUsersSavedShowsResponse";
import NoImage from "./NoImage";

interface PlaylistCardProps {
    item: GetArtistAlbumsResponseItem | GetCurrentUserPlaylistResponseItem | GetUsersSavedAlbumResponseItem | GetUsersSavedShowsResponseItem
    container?: boolean
    withPlayBtn?: boolean
}

const PlaylistCard: FC<PlaylistCardProps> = ({ item, container, withPlayBtn }) => {
    console.log(item)

    return (
        <div className={`playlist_card group ${ container && 'section_item' }`}>
            <div className="relative rounded overflow-hidden">
                { item.images[0] ? (
                    <Image src={ item.images[0].url } width={200} height={200} alt='title' className="w-full" />
                ) : (
                    <NoImage />
                )}

                {/* Renders when true */}
                {withPlayBtn && (
                    <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-2 shadow-lg shadow-sdark-base">
                        <PlayIcon width={24} height={24} />
                    </button>
                )}
            </div>
            <div className="space-y-1">
                <Link href={`/${item?.type}/${item?.id}`} className="font-bold text-white text-lg line-clamp-1">
                    { item.name }
                </Link>
                <div className="flex items-center space-x-1 text-swhite-subdued text-xs md:text-sm line-clamp-2">
                    { item?.description ? (
                        <span>
                            { item?.description }
                        </span>
                    ) : (
                        <>
                            { item?.owner?.display_name && (
                                <span>
                                    By { item?.owner.display_name }
                                </span>
                            ) }
                        </>
                    )}

                    { item?.release_date && (
                        <>
                            <span>
                                { moment(item?.release_date).format('YYYY') }
                            </span>
                            { item?.type && (
                                <>
                                    <span>{'•'}</span> 
                                    <span className="capitalize">
                                        { item?.type }
                                    </span> 
                                </>
                            ) }
                        </>
                    ) }
                </div>
            </div>
        </div>
        
    );
}
 
export default PlaylistCard;