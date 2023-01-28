import { FC } from "react";
import ArtistCard from "./ArtistCard";

interface ArtistSectionProps {
    title: string,
    items?: object[]
}
 
const ArtistSection: FC<ArtistSectionProps> = ({ title, items }) => {
    return ( 
        <div className="space-y-5">
            {/* Title Section */}
            <div className="flex items-center justify-between">
                <a href="" className="text-white text-2xl font-bold hover:underline">
                    { title }
                </a>
                <a href="" className="text-swhite-subdued font-bold uppercase text-xs md:text-sm hover:underline">
                    Show All
                </a>
            </div>

            {/* Artist Items Section */}
            <div className="flex justify-between flex-wrap">
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
            </div>
        </div>
     );
}
 
export default ArtistSection;