import { FC } from "react";

interface SearchHeaderProps {
    
}
 
const SearchHeader: FC<SearchHeaderProps> = () => {
    return ( 
        <div className="flex bg-sdark-base px-4 sm:px-8 py-2 space-x-3 sticky top-16 z-30">
            {['All', 'Artists', 'Albums', 'Playlists', 'Songs', 'Podcasts & Shows', 'Profile', 'Genres & Moods'].map((item, i) => (
                <button key={i} className="text-white bg-sdark-el-base-highlight py-2 px-3 rounded-full text-sm whitespace-nowrap">
                    { item }
                </button>
            ))}
        </div>
     );
}
 
export default SearchHeader;