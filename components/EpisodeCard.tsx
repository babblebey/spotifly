import { FC } from "react";
import Image from "next/image";
import { ThreeDotsIcon, PlayIcon, PlusCircleIcon, ShareIcon } from "../icons";
import { Item as GetShowResponseItem } from "../types/spotify-api/GetShowResponse";
import { Episode as GetUsersSavedEpisodesResponseItem } from "../types/spotify-api/GetUsersSavedEpisodesResponse";
import moment from "moment";

interface EpisodeCardProps {
    data: GetShowResponseItem | GetUsersSavedEpisodesResponseItem
}
 
const EpisodeCard: FC<EpisodeCardProps> = ({ data }) => {
    console.log(data);
    
    const { id, name, description, images, release_date, duration_ms } = data;
    const { show } = data as GetUsersSavedEpisodesResponseItem;

    return ( 
        <>
            <hr className="border-t-2 border-sdark-el-base-highlight"/>
            <div className="group flex px-4 -mx-2 @cmd:-mx-4 py-5 -my-1 space-x-5 rounded-md text-swhite-subdued hover:bg-sdark-el-base-highlight">
                <div className="w-3/12 @csm:w-28 @cmd:h-28">
                    <Image src={ images[0].url } width={150} height={150} alt="title" className="object-contain rounded-xl" />
                </div>
                <div className="w-9/12 @csm:w-full space-y-2">
                    <a href="" className="font-bold text-base text-white hover:underline block relative">
                        { name }
                    </a>
                    { show && (
                        <a href={`show/${show?.id}`} className="font-bold text-base text-white hover:underline relative">
                            { show.name }
                        </a>
                    ) }
                    <p className="line-clamp-2">
                        { description }
                    </p>
                    <div className="flex items-centet justify-between pt-3 pb-2">
                        <div className="flex items-center space-x-5">
                            <button className="play_button bg-white h-8 w-8">
                                <PlayIcon width={20} height={20} />
                            </button>
                            <p>
                                <span>
                                    { moment(release_date).format('MMM D') }    
                                </span> 
                                {' • '} 
                                <span>
                                    { moment(duration_ms).format('mm') }
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-6 invisible group-hover:visible">
                            <button>
                                <ShareIcon width={24} height={24} className="fill-swhite-subdued hover:fill-white" />
                            </button>
                            <button>
                                <PlusCircleIcon width={24} height={24} className="fill-swhite-subdued hover:fill-white" />
                            </button>
                            <button>
                                <ThreeDotsIcon width={18} height={18} className="fill-swhite-subdued hover:fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default EpisodeCard;