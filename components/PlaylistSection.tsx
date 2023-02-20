import { FC } from "react";
import PlaylistCard from "./PlaylistCard";

interface PlaylistSectionProps {
    title: string,
    subtitle?: string,
    items?: any[],
    hideOverflow?: boolean,
    showAll?: boolean,
    withPlayBtn?: boolean
}
 
const PlaylistSection: FC<PlaylistSectionProps> = ({ title, subtitle, items, hideOverflow, showAll, withPlayBtn }) => {
    return ( 
        <div className="space-y-5 section @container/section">
            {/* Title Section */}
            <div className="flex items-center justify-between">
                <div>
                    <a href="" className="block _title hover:underline">
                        { title }
                    </a>
                    {subtitle && (
                        <span className="text-sm text-swhite-subdued">
                            { subtitle }
                        </span>
                    )}
                </div>
                {showAll && (
                    <a href="" className="_link">
                        Show All
                    </a>
                )}
            </div>

            {/* Playlist Items Section */}
            <div className={`items @container/section-items ${!hideOverflow && 'gap-y-6'}`}>
                { items?.map((i, l) => (
                    <PlaylistCard key={i} container={hideOverflow} withPlayBtn={withPlayBtn} />
                )) }
            </div>
        </div>
     );
}
 
export default PlaylistSection;