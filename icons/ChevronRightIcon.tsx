import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string
}
 
const ChevronRightIcon: FC<Props> = ({ height, width, color, className }) => {
    return ( 
        <>
            <svg role="img" fill={color || '#fff'} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 16 16" data-encore-id="icon">
                <path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"></path>
            </svg>
        </>
    );
}
 
export default ChevronRightIcon;