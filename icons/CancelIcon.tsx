import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string,
    active?: boolean
}
 
const CancelIcon: FC<Props> = ({ height, width, color, className, active }) => {
    return ( 
        <>
            <svg role="img" fill={color} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 24 24" data-encore-id="icon">
                <path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path>
            </svg>
        </>
    );
}
 
export default CancelIcon;