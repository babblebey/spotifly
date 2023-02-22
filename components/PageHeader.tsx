import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, SearchIcon, UserIcon, CarretIcon, CancelIcon } from "../icons";
import { signIn, signOut, useSession } from "next-auth/react";

interface PageHeaderProps {
    variant: 'home' | 'search' | 'library' | 'playlist' | 'title',
    className?: string
}

const PageHeader: FC<PageHeaderProps> = ({ variant, className }) => {
    const { status, data } = useSession();
    const isLoggedIn: boolean = status === 'authenticated';

    const home: boolean = variant === 'home';
    const search: boolean = variant === 'search';
    const library: boolean = variant === 'library';
    const playlist: boolean = variant === 'playlist';
    const title: boolean = variant === 'title';

    return ( 
        <header className={`${ className } transition-colors duration-300 ease-in-out @container/header flex items-center space-x-4 py-4 px-4 sm:px-8 h-16 w-full sticky z-30 top-0 left-0`}>
            {/* Navigation */}
            <div className={`${(!isLoggedIn || home) && 'grow'} flex space-x-4`}>
                <button className="flex h-8 w-8 items-center justify-center bg-black rounded-full">
                    <ChevronLeftIcon width={16} height={16} />
                </button>
                <button className="hidden @csm/header:flex h-8 w-8 items-center justify-center bg-black rounded-full disabled:opacity-30" disabled>
                    <ChevronRightIcon width={16} height={16} />
                </button>
            </div>

            {/* Playlist - Play Button/Title  */}
            {isLoggedIn && playlist && (
                <div className={`${true && 'grow'} text-white flex items-center space-x-4`}>
                    <button className="play_button bg-sgreen-100 h-12 w-12">
                        <PlayIcon width={28} height={24} />
                    </button>
                    <h2 className="text-2xl font-extrabold">
                        Study lofi 📚
                    </h2>
                </div>
            )}

            {/* Title */}
            {isLoggedIn && title && (
                <div className={`${true && 'grow'} text-white`}>
                    <h2 className="text-2xl font-extrabold">
                        Page title
                    </h2>
                </div>
            )}

            {/* Library - Collection List */}
            {isLoggedIn && library && (
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
            {search && (
                <div className={`${true && 'grow'}`}>
                    <form action="" className="relative h-10 w-full @csm/header:w-96 flex items-center">
                        <SearchIcon width={24} height={24} color="black" className="absolute left-3" />
                        <input 
                            type="text" 
                            placeholder="What do you want to listen to?"
                            className="rounded-full h-full w-full px-12 text-sm bg-white focus-visible:outline-none" 
                        />
                        <CancelIcon width={24} height={24} color="black" className="absolute right-3" />
                    </form>
                </div>
            )}

            {/* Upgrade Button */}
            {(isLoggedIn && (home || playlist || title)) && (
                <div className="hidden @cxs/header:block">
                    <button className="upgrade-btn">
                        <p>Upgrade</p>
                    </button>
                </div>
            )}

            {/* Profile Option or Authentication Option */}
            {isLoggedIn ? (
                <div>
                    <button className="flex items-center space-x-2 text-white text-sm font-bold rounded-full bg-black p-[2px] @csm/header:pr-2"
                        onClick={() => signOut()}
                    >
                        <div className="flex items-center h-7 w-7 justify-center rounded-full bg-sdark-53">
                            <UserIcon width={16} height={16} />
                        </div>
                        <p className="hidden @csm/header:block">
                            { data?.user?.name }
                        </p>
                        <CarretIcon width={16} height={16} className="hidden @csm/header:block" />
                    </button>
                </div>
            ) : (
                <div className="flex items-center space-x-6">
                    <button className="text-swhite-subdued font-bold hover:text-white hover:scale-105"
                        onClick={() => signIn()}
                    >
                        <p>Sign up</p>
                    </button>
                    <button className="h-12 w-28 rounded-full bg-white text-black font-bold hover:scale-105 hover:bg-slate-50"
                        onClick={() => signIn()}
                    >
                        <p>Log in</p>
                    </button>
                </div>
            )}
        </header>
    );
}
 
export default PageHeader;