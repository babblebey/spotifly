import { FC, useState } from "react";
import PlaylistCard from "./PlaylistCard";

interface PlaylistSectionProps {
    title: string,
    items?: object[],
    hideOverflow?: boolean,
    showAll?: boolean
}
 
const PlaylistSection: FC<PlaylistSectionProps> = ({ title, items, hideOverflow, showAll }) => {
    const [list, setList] = useState([1,2,3,4,5,6,7,8,9]);

    return ( 
        <div className="space-y-5 section @container/section">
            {/* Title Section */}
            <div className="flex items-center justify-between">
                <a href="" className="_title hover:underline">
                    { title }
                </a>
                {showAll && (
                    <a href="" className="_link">
                        Show All
                    </a>
                )}
            </div>

            {/* Playlist Items Section */}
            <div className={`items @container/section-items ${!hideOverflow && 'gap-y-6'}`}>
                { list.map((i, l) => (
                    <PlaylistCard key={i} container={hideOverflow} />
                )) }
            </div>
        </div>
     );
}
 
export default PlaylistSection;