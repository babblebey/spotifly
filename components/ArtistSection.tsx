import { FC } from "react";
import ArtistCard from "./ArtistCard";
import Link from "next/link";
import { Item as FollowedArtistsItem } from "../types/spotify-api/GetFollowedArtistsResponse";
import { Artist as ArtistRelatedArtistsItem } from "../types/spotify-api/GetArtistRelatedArtistsResponse";

interface ArtistSectionProps {
    title: string,
    subtitle?: string,
    items: FollowedArtistsItem[] | ArtistRelatedArtistsItem[],
    hideOverflow?: boolean,
    showAll?: { link: boolean, route: string },
    withPlayBtn?: boolean
}
 
const ArtistSection: FC<ArtistSectionProps> = ({ title, subtitle, items, hideOverflow, showAll, withPlayBtn }) => {
    console.log(items)

    return ( 
        <div className="space-y-5 section @container/section">
            {/* Title Section */}
            <div className="flex items-center justify-between">
                <div>
                    <Link href={ showAll?.route || '' } className={`block _title ${showAll && 'hover:underline'}`}>
                        { title }
                    </Link>
                    {subtitle && (
                        <span className="text-sm text-swhite-subdued">
                            { subtitle }
                        </span>
                    )}
                </div>
                {showAll && (
                    <Link href={ showAll?.route || '' }  className="_link">
                        Show All
                    </Link>
                )}
            </div>

            {/* Artist Items Section */}
            <div className={`items @container/section-items ${!hideOverflow && 'gap-y-6'}`}>
                { items?.map((item, i) => (
                    <ArtistCard key={i} item={ item } container={hideOverflow} withPlayBtn={withPlayBtn} />
                )) }
            </div>
        </div>
     );
}
 
export default ArtistSection;