import { FC } from "react";

interface LoadingProps {
    
}
 
const Loading: FC<LoadingProps> = () => {
    return ( 
        <main className="content h-full @container">
            <div className="h-full w-full flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-sgreen-100 border-b-sdark-base animate-spin" />
            </div>
        </main>
     );
}
 
export default Loading;