import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string
}
 
const ThreeDotsIcon: FC<Props> = ({ height, width, color, className }) => {
    return ( 
        <>
            <svg role="img" fill={color || '#fff'} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 16 16" data-encore-id="icon">
                <path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
        </>
    );
}
 
export default ThreeDotsIcon;