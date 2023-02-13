import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string,
    active?: boolean
}
 
const ShareIcon: FC<Props> = ({ height, width, color, className, active }) => {
    return ( 
        <>
            <svg role="img" fill={color} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 24 24" data-encore-id="icon">
                <path d="M3 8a1 1 0 011-1h3.5v2H5v11h14V9h-2.5V7H20a1 1 0 011 1v13a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"></path>
                <path d="M12 12.326a1 1 0 001-1V3.841l1.793 1.793a1 1 0 101.414-1.414L12 .012 7.793 4.22a1 1 0 101.414 1.414L11 3.84v7.485a1 1 0 001 1z"></path>
            </svg>
        </>
    );
}
 
export default ShareIcon;