import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, SearchIcon, UserIcon, CarretIcon } from "../icons";

interface PageHeaderProps {
    variant: 'home' | 'search' | 'library' | 'playlist',
    isLoggedIn: boolean
}

const PageHeader: FC<PageHeaderProps> = ({ variant, isLoggedIn }) => {
    return ( 
        <header className="flex items-center space-x-4 py-4 px-4 sm:px-8 h-16 w-full sticky top-0 left-0 bg-sdark-base">
            {/* Navigation */}
            <div className={`${(!isLoggedIn || variant === 'home') && 'grow'} flex space-x-4`}>
                <button className="flex h-8 w-8 items-center justify-center bg-black rounded-full">
                    <ChevronLeftIcon width={16} height={16} />
                </button>
                <button className="hidden md:flex h-8 w-8 items-center justify-center bg-black rounded-full disabled:opacity-30" disabled>
                    <ChevronRightIcon width={16} height={16} />
                </button>
            </div>

            {/* Playlist - Play Button/Title  */}
            {isLoggedIn && variant === 'playlist' && (
                <div className={`${true && 'grow'} text-white flex items-center space-x-4`}>
                    <button className="play_button h-12 w-12">
                        <PlayIcon width={28} height={24} />
                    </button>
                    <h2 className="text-2xl font-extrabold">
                        Study lofi 📚
                    </h2>
                </div>
            )}

            {/* Library - Collection List */}
            {isLoggedIn && variant === 'library' && (
                <div className={`${true && 'grow'}`}>
                    <ul className="flex items-center text-white font-bold text-sm">
                        <li className="collection-list-item">
                            <a href="">
                                Playlists
                            </a>
                        </li>
                        <li className="collection-list-item bg-[#333333]">
                            <a href="">
                                Podcasts
                            </a>
                        </li>
                        <li className="collection-list-item">
                            <a href="">
                                Artists
                            </a>
                        </li>
                        <li className="collection-list-item">
                            <a href="">
                                Albums
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Search Form */}
            {variant === 'search' && (
                <div className={`${true && 'grow'}`}>
                    <form action="" className="relative h-10 w-full md:w-96 flex items-center">
                        <input 
                            type="text" 
                            placeholder="What do you want to listen to?"
                            className="rounded-full h-full w-full pl-12 text-sm bg-white focus-visible:outline-none" 
                        />
                        <SearchIcon width={24} height={24} color="black" className="absolute left-3" />
                    </form>
                </div>
            )}

            {/* Upgrade Button */}
            {(isLoggedIn && variant === 'home' || variant === 'playlist') && (
                <div className="hidden md:block">
                    <button className="upgrade-btn">
                        <p>Upgrade</p>
                    </button>
                </div>
            )}

            {/* Profile Option or Authentication Option */}
            {isLoggedIn ? (
                <div>
                    <button className="flex items-center space-x-2 text-white text-sm font-bold rounded-full bg-black p-[2px] md:pr-2">
                        <div className="flex items-center h-7 w-7 justify-center rounded-full bg-sdark-53">
                            <UserIcon width={16} height={16} />
                        </div>
                        <p className="hidden md:block">
                            Babblebey
                        </p>
                        <CarretIcon width={16} height={16} className="hidden md:block" />
                    </button>
                </div>
            ) : (
                <div className="flex items-center space-x-6">
                    <button className="text-swhite-subdued font-bold hover:text-white hover:scale-105">
                        <p>Sign up</p>
                    </button>
                    <button className="h-12 w-28 rounded-full bg-white text-black font-bold hover:scale-105 hover:bg-slate-50">
                        <p>Log in</p>
                    </button>
                </div>
            )}
        </header>
    );
}
 
export default PageHeader;