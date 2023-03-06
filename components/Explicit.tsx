import { FC } from "react";

interface ExplicitProps {
    
}
 
const Explicit: FC<ExplicitProps> = () => {
    return ( 
        <span className="bg-swhite-subdued text-[0.56rem] flex items-center justify-center h-4 w-4 text-sdark-base rounded-sm">
            <span>E</span>
        </span>
    );
}
 
export default Explicit;