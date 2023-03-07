import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string,
    active?: boolean
}
 
const MusicNoteIcon: FC<Props> = ({ height, width, color, className, active }) => {
    return ( 
        <>
            <svg role="img" fill={color} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 24 24" data-encore-id="icon">
                <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
            </svg>
        </>
    );
}
 
export default MusicNoteIcon;