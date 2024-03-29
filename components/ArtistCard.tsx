import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
import { PlayIcon } from "../icons";
import { Item as FollowedArtistsItem } from "../types/spotify-api/GetFollowedArtistsResponse";

interface ArtistCardProps {
    item: FollowedArtistsItem
    container?: boolean
    withPlayBtn?: boolean
}
 
const ArtistCard: FC<ArtistCardProps> = ({ item, container, withPlayBtn }) => {
    return ( 
        <div className={`artist_card group ${ container && 'section_item' }`}>
            <div className="relative">
                <Image src={ item.images[0].url } width={500} height={500} alt={ item.name } 
                    className="rounded-full object-cover shadow-2xl shadow-black w-full h-full" 
                />

                {/* Renders when true */}
                {withPlayBtn && (
                    <button className="play_button_hide_show bg-sgreen-100 h-12 w-12 m-2 shadow-lg shadow-sdark-el-base">
                        <PlayIcon width={24} height={24} />
                    </button>
                )}
            </div>
            <div className="space-y-1">
                <Link href={`/artist/${item.id}`} className="font-bold text-white text-lg">
                    { item.name }
                </Link>
                <p className="text-swhite-subdued text-xs md:text-sm lg:text-base">
                    Artist
                </p>
            </div>
        </div>
     );
}
 
export default ArtistCard;