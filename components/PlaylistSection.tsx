import { FC } from "react";
import PlaylistCard from "./PlaylistCard";

interface PlaylistSectionProps {
    title: string,
    items?: object[]
}
 
const PlaylistSection: FC<PlaylistSectionProps> = ({ title, items }) => {
    return ( 
        <div className="space-y-5" id="playlist_section">
            {/* Title Section */}
            <div className="flex items-center justify-between">
                <a href="" className="text-white text-2xl font-bold hover:underline">
                    { title }
                </a>
                <a href="" className="text-swhite-subdued font-bold uppercase text-xs md:text-sm hover:underline">
                    Show All
                </a>
            </div>

            {/* Playlist Items Section */}
            <div className="flex justify-between flex-wrap">
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
                <PlaylistCard />
            </div>
        </div>
     );
}
 
export default PlaylistSection;