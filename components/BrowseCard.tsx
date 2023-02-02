import Image from "next/image";
import { FC } from "react";

interface BrowseCardProps {
    num: number
}
 
const BrowseCard: FC<BrowseCardProps> = ({ num }) => {
    return ( 
        <a href="" className="relative w-full min-h-[190px] text-white bg-green-600 rounded p-4 overflow-hidden">
            <p className="text-2xl font-bold">
                {num} Card Title
            </p>
            <Image src={'/s1.jfif'} width={95} height={95} alt="title" 
                className="contain absolute right-0 bottom-0 rotate-[25deg] translate-x-4 shadow-sm shadow-sdark-53"
            />
        </a>
     );
}
 
export default BrowseCard;