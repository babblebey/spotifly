import { FC, useEffect } from "react";
import Image from "next/image";
import { HomeIcon, SearchIcon, LibraryIcon, DownloadIcon, HeartIcon, PlusIcon } from "../icons";
import useResizer, { useResizerProps } from "../hooks/useResizer";

interface NavbarProps {
  isLoggedIn: boolean
}

const Navbar: FC<NavbarProps> = ({ isLoggedIn }) => {
  useEffect(() => {
    // Setting Resizer Properties
    const resizerProps: useResizerProps = {
      resizer: document.getElementById('resizer')!,
      sidebar: document.getElementById('sidebar')!,
      maxWidth: 400,
      minWidth: 120
    }

    // Initialise Resizer
    useResizer(resizerProps);
  }, [])

  return (
    <nav className="bg-black hidden h_screen_fit sm:flex grow-0 w sm:w-[180px] md:w-[300px] relative select-none" id="sidebar">
      {/* Resizer */}
      <div className="absolute h-full w-2 z-30 right-0 top-0 hover:border-r hover:border-swhite-subdued hover:cursor-e-resize active:cursor-col-resize" id="resizer" />

      {/* Nav Body */}
      <div className="flex flex-col w_inherit">
        {/* Logo Area */}
        <div className="p-5">
          <Image src="/spotifly-w.svg" height={40} width={131} className="object-contain" alt="Spotifly" />
        </div>

        {/* First Menu List */}
        <div>
          <ul className="menu_list">
            <li className="menu_list_item">
              <a href="" className={`menu_link`}>
                <HomeIcon color="white" width={24} height={24} className="flex-none" />
                <p>Home</p>
              </a>
            </li>
            <li className="menu_list_item">
              <a href="" className={`menu_link`}>
                <SearchIcon color="white" width={24} height={24} className="flex-none" />
                <p>Search</p>
              </a>
            </li>
            <li className="menu_list_item">
              <a href="" className={`menu_link`}>
                <LibraryIcon color="white" width={24} height={24} className="flex-none" />
                <p>Your Library</p>
              </a>
            </li>
          </ul>
        </div>

        {/* Second Menu List */}
        <div>
          <ul className="menu_list">
            <li className="menu_list_item" draggable="true">
              <a href="" className={`menu_link`}>
                <div className="menu_link_icon_wrap bg-white">
                  <PlusIcon width={12} height={12} />
                </div>
                <p>Create Playlist</p>
              </a>
            </li>
            <li className="menu_list_item" draggable="true">
              <a href="" className={`menu_link`}>
                <div className="menu_link_icon_wrap bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
                  <HeartIcon width={12} height={12} />
                </div>
                <p>Liked Songs</p>
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        {isLoggedIn && (
          <div className="px-5 py-3"><hr className="border-sdark-subdued" /></div>
        )}

        {/* Other Menu Part */}
        <div className="h-full w-full flex flex-col">
          <div className={`${true && 'grow'} ${!isLoggedIn && 'flex items-end'} px-5 overflow-y-auto overflow-x-hidden text-swhite-subdued`}>
            {isLoggedIn ? (
              // Playlists - Render when user isLoggedIn
              <ul className="space-y-2 overflow-hidden">
                <li className="text_ellipsis">
                  <a href="" className="my-2 text-sm">Study lofi 📚</a>
                </li>
                <li className="text_ellipsis">
                  <a href="" className="my-2 text-sm">Atomic Habits</a>
                </li>
              </ul>
            ) : (
              // Quick links - Render when user (is not logged in) !isLoggedIn
              <ul className="flex flex-wrap text-xs">
                <li className="mr-5 mb-5">
                  <a href="">Legal</a>
                </li>
                <li className="mr-5 mb-5">
                  <a href="">Privacy Centre</a>
                </li>
                <li className="mr-5 mb-5">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="mr-5 mb-5">
                  <a href="">Cookies</a>
                </li>
                <li className="mr-5 mb-5">
                  <a href="">About Ads</a>
                </li>
              </ul>
            )}
          </div>

          <div className={`${false && 'grow'}`}>
            <ul className="my-2 px-5">
              <li className="menu_list_item">
                <a href="" className={`menu_link`}>
                  <DownloadIcon color="white" width={24} height={24} className="flex-none" />
                  <p>Install App</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;