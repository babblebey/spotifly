import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string,
    active?: boolean
}
 
const PlusCircleIcon: FC<Props> = ({ height, width, color, className, active }) => {
    return ( 
        <>
            <svg role="img" fill={color} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 24 24" data-encore-id="icon">
                <path d="M11.999 3a9 9 0 100 18 9 9 0 000-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"></path>
                <path d="M17.999 12a1 1 0 01-1 1h-4v4a1 1 0 11-2 0v-4h-4a1 1 0 110-2h4V7a1 1 0 112 0v4h4a1 1 0 011 1z"></path>
            </svg>
        </>
    );
}
 
export default PlusCircleIcon;