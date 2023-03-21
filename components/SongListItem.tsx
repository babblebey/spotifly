import { FC } from "react";
import Image from "next/image";
import { HeartOutlineIcon, PlayIcon, ThreeDotsIcon } from "../icons";
import { Item as GetPlaylistResponseTracksItem } from "../types/spotify-api/GetPlaylistResponse";
import { Item as GetAlbumResponseTracksItem } from "../types/spotify-api/GetAlbumResponse";
import { Track as GetArtistTopTracksResponseItem } from "../types/spotify-api/GetArtistTopTracksResponse";
import { Item as GetUsersSavedTracksRespnseItem } from "../types/spotify-api/GetUsersSavedTracksResponse";
import moment from "moment";
import Explicit from "./Explicit";
import Link from "next/link";

interface SongListItemProps {
    data: GetPlaylistResponseTracksItem | GetAlbumResponseTracksItem | GetArtistTopTracksResponseItem | GetUsersSavedTracksRespnseItem;
    index?: number,
    variant: 'artist' | 'playlist' | 'search' | 'album' | 'track' | 'user'
}
 
const SongListItem: FC<SongListItemProps> = ({ data, index, variant }) => {
    const artistVariant: boolean = variant === 'artist';
    const playlistVariant: boolean = variant === 'playlist';
    const searchVariant: boolean = variant === 'search';
    const albumVariant: boolean = variant === 'album';
    const trackVariant: boolean = variant === 'track';
    const userVariant: boolean = variant === 'user';

    const { track: playlistTrack } = data as GetPlaylistResponseTracksItem;
    const albumTrack = data as GetAlbumResponseTracksItem;
    const artistTopTrack = data as GetArtistTopTracksResponseItem;
    const { track: userSavedTrack } = data as GetUsersSavedTracksRespnseItem;

    return ( 
        <div className={
            `grid 
            ${ searchVariant && 'grid-cols-8'} 
            ${(artistVariant || playlistVariant || albumVariant || userVariant) && 'gap-x-4 px-5 text-swhite-subdued text-sm py-1'} 
            ${(artistVariant || userVariant) && 'grid-cols-aslist'} ${playlistVariant && 'grid-cols-plist'} 
            ${albumVariant && 'grid-cols-albslist'} 
            group hover:bg-sdark-el-base-highlight rounded select-none`
        }>
            {/* List Number - Renders for Stated Variant(s) */}
            {(playlistVariant || artistVariant || albumVariant || userVariant) && (
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
            
            <div className={`${searchVariant && 'col-span-6 px-2'} py-1 flex items-center`}>
                {/* Song Image - Renders for all Variant except stated Variant (albumVariant) */}
                {!albumVariant && (
                    <div className="relative w-10 h-10 mr-4">
                        <Image src={ playlistTrack?.album.images[2].url || artistTopTrack?.album.images[0].url || userSavedTrack?.album.images[0].url } 
                            width={60} height={60} alt="title" className="w-full" 
                        />
                        {searchVariant && (
                            <button className="hidden group-hover:block absolute w-full h-full top-0 bg-black bg-opacity-60">
                                <PlayIcon color="white" width={20} height={20} className="m-auto" />
                            </button>
                        )}
                    </div>
                )}

                <div className="text-ellipsis flex flex-col">
                    <Link href={ `/track/${playlistTrack?.id || albumTrack?.id || artistTopTrack?.id || userSavedTrack?.id}` } 
                        className={`${(albumVariant || userVariant) && 'font-bold'} text-base text-white text-ellipsis hover:underline`}
                    >
                        { playlistTrack?.name || albumTrack?.name || artistTopTrack?.name }
                    </Link>

                    {/* Artist Name - Renders for all Variant except stated Variant (albumVariant) */}
                    <span className="flex items-center space-x-2">
                        {(playlistTrack?.explicit || albumTrack?.explicit || artistTopTrack?.explicit || userSavedTrack?.explicit) && (
                            <Explicit />
                        )}
                            
                        {!artistVariant && (
                            playlistTrack?.artists.map((artist, i) => (
                                <Link href={`/artist/${artist.id}`} key={i} className="text-swhite-subdued group-hover:text-white text-sm hover:underline">
                                    { artist.name }
                                </Link>
                            ))
                            || // Or
                            albumTrack?.artists.map((artist, i) => (
                                <Link href={`/artist/${artist.id}`} key={i} className="text-swhite-subdued group-hover:text-white text-sm hover:underline">
                                    { artist.name }
                                </Link>
                            ))
                            || // Or
                            userSavedTrack?.artists.map((artist, i) => (
                                <Link href={`/artist/${artist.id}`} key={i} className="text-swhite-subdued group-hover:text-white text-sm hover:underline">
                                    { artist.name }
                                </Link>
                            ))
                        )}
                    </span>
                </div>
            </div>

            {/* Song Listens Count - Renders for Stated Variant(s)  */}
            {artistVariant && (
                <div className="col-span-1 px-2 py-1 flex items-center">
                    <p className="text-sm text-swhite-subdued group-hover:text-white ">
                        {/* 1,111,000/*/}
                    </p>
                </div>
            )}

            {/* Album Name - Renders for Stated Variant(s) */}
            {(playlistVariant || userVariant) && (
                <div className="px-2 py-1 flex items-center">
                    <a href="" className="text-sm text-swhite-subdued group-hover:text-white ">
                        { playlistTrack?.album.name || userSavedTrack?.album.name }
                    </a>
                </div>
            )}

            {/* Song Date - Renders for Stated Variant(s) */}
            {playlistVariant && (
                <div className="px-2 py-1 flex items-center">
                    <p className="text-sm text-swhite-subdued group-hover:text-white ">
                        { moment(
                            playlistTrack?.album.release_date || userSavedTrack?.album.release_date
                        ).startOf('day').fromNow() }
                    </p>
                </div>
            )}

            {/* Like Button, Duration and More Button */}
            <div className={`${searchVariant && 'col-span-2'} p-2 flex items-center justify-end text-swhite-subdued w-fit justify-self-end`}>
                <button className="mr-2 invisible group-hover:visible">
                    <HeartOutlineIcon color="#a7a7a7" width={16} height={16} />
                </button>
                <p className="ml-6 mr-4 text-sm">
                    { moment(
                        playlistTrack?.duration_ms || albumTrack?.duration_ms || artistTopTrack?.duration_ms || userSavedTrack?.duration_ms
                    ).format('m:ss') }
                </p>
                <button className="mr-2 invisible group-hover:visible">
                    <ThreeDotsIcon color="#a7a7a7" width={16} height={16} />
                </button>
            </div>
        </div>
     );
}
 
export default SongListItem;