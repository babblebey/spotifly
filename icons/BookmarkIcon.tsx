import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string
}
 
const BookmarkIcon: FC<Props> = ({ height, width, color, className }) => {
    return ( 
        <>
            <svg role="img" fill={color || '#fff'} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 24 24" data-encore-id="icon">
                <path d="M7 1a3 3 0 0 0-3 3v17.167c0 1.448 1.657 2.27 2.81 1.393L12 18.612l5.19 3.948c1.153.876 2.81.055 2.81-1.393V4a3 3 0 0 0-3-3H7z"></path>
            </svg>
        </>
    );
}
 
export default BookmarkIcon;