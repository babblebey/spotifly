import { FC, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, SearchIcon, UserIcon, CarretIcon, CancelIcon } from "../icons";
import { signIn, signOut, useSession } from "next-auth/react";
import useScroll, { scrollData } from "../hooks/useScroll";
import { useRouter } from "next/router";
import Link from "next/link";

interface PageHeaderProps {
    variant: 'home' | 'search' | 'library' | 'playlist' | 'title',
    title?: string,
    backgroundColor?: string
}

const PageHeader: FC<PageHeaderProps> = ({ variant, title, backgroundColor }) => {
    const { status, data } = useSession();    
    const isLoggedIn: boolean = status === 'authenticated';
    const [displayTitle, setDisplayTitle] = useState(false);
    const { pathname } = useRouter();

    const session = useSession();
    
    const homeVariant: boolean = variant === 'home';
    const searchVariant: boolean = variant === 'search';
    const libraryVariant: boolean = variant === 'library';
    const playlistVariant: boolean = variant === 'playlist';
    const titleVariant: boolean = variant === 'title';

    console.log(session);    

    useEffect(() => {
        useScroll({
            element: document.querySelector('.page') as HTMLElement,
            callback({ scrollTop }: scrollData) {
                if (libraryVariant) {
                    scrollTop > 50 ? setDisplayTitle(true) : setDisplayTitle(false)
                } else {
                    scrollTop > 300 ? setDisplayTitle(true) : setDisplayTitle(false)
                }
            }
        })
    }, [])


    return ( 
        <header className="transition-colors duration-300 ease-in-out @container/header flex items-center space-x-4 py-4 px-4 sm:px-8 h-16 w-full sticky z-30 top-0 left-0"
            style={{ backgroundColor: displayTitle ? backgroundColor : 'transparent' }}
        >
            {/* Navigation */}
            <div className={`${(!isLoggedIn || homeVariant) && 'grow'} flex space-x-4`}>
                <button className="flex h-8 w-8 items-center justify-center bg-black rounded-full">
                    <ChevronLeftIcon width={16} height={16} />
                </button>
                <button className="hidden @csm/header:flex h-8 w-8 items-center justify-center bg-black rounded-full disabled:opacity-30" disabled>
                    <ChevronRightIcon width={16} height={16} />
                </button>
            </div>

            {/* Playlist - Play Button/Title  */}
            {isLoggedIn && playlistVariant && (
                <div className={`${true && 'grow'} text-white flex items-center space-x-4`}>
                    { displayTitle && (
                        <>
                            <button className="play_button bg-sgreen-100 h-12 w-12">
                                <PlayIcon width={28} height={24} />
                            </button>
                            <h2 className="hidden @csm/header:block text-2xl font-extrabold transition-display ease-in duration-100">
                                { title }
                            </h2>
                        </>
                    ) }
                </div>
            )}

            {/* Title */}
            {isLoggedIn && titleVariant && (
                <div className={`${true && 'grow'} text-white`}>
                    { displayTitle && (
                        <h2 className="hidden @csm/header:block text-2xl font-extrabold transition-display ease-in duration-100">
                            { title }
                        </h2>
                    ) }
                </div>
            )}

            {/* Library - Collection List */}
            {isLoggedIn && libraryVariant && (
                <div className={`${true && 'grow'}`}>
                    <ul className="flex items-center text-white font-bold text-sm">
                        { ['Playlists', 'Podcasts', 'Artists', 'Albums'].map((item, i) => (
                            <li className={`collection-list-item ${ pathname.includes(item.toLowerCase()) && 'bg-[#333333]' }`}>
                                <Link href={`/collection/${ item.toLowerCase() }`}>
                                    { item }
                                </Link>
                            </li>
                        )) }
                    </ul>
                </div>
            )}

            {/* Search Form */}
            {searchVariant && (
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
            {(isLoggedIn && (homeVariant || playlistVariant || titleVariant)) && (
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