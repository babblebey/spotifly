import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string
}
 
const PlusIcon: FC<Props> = ({ height, width, color, className }) => {
    return ( 
        <>
            <svg role="img" fill={color || '#000'} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 16 16" data-encore-id="icon">
                <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
            </svg>
        </>
    );
}
 
export default PlusIcon;