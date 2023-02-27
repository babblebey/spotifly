import { FC } from "react";

interface FormatNumberProps {
    value: number
}
 
const FormatNumber: FC<FormatNumberProps> = ({ value }) => {
    return ( 
        <>
            { new Intl.NumberFormat().format(value) }
        </>
     );
}
 
export default FormatNumber;