import { FC } from "react";
import { MusicNoteIcon } from "../icons";

interface NoImageProps {
    
}
 
const NoImage: FC<NoImageProps> = () => {
    return ( 
        <div className="relative flex items-center justify-center bg-sdark-33 h-[160px] shadow-3xl shadow-black">
            <MusicNoteIcon width={50} height={50} className="fill-swhite-subdued" />
        </div>
    );
}
 
export default NoImage;