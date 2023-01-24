import { FC, useEffect } from "react"
import Image from "next/image";
import { HomeIcon, SearchIcon, LibraryIcon, DownloadIcon, HeartIcon, PlusIcon } from "../icons";
import useResizer, { useResizerProps } from "../hooks/useResizer";

interface NavbarProps {
  
}
 
const Navbar: FC<NavbarProps> = () => {
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
    <nav className="bg-black hidden sm:flex grow-0 w sm:w-[180px] md:w-[300px] relative select-none" id="sidebar">
      {/* Resizer */}
      <div className="absolute h-full w-2 z-30 right-0 top-0 hover:border-r hover:border-gray-400 hover:cursor-e-resize active:cursor-col-resize" id="resizer" />

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
        <div className="px-5 py-3 opacity-30">
          <hr />
        </div>

        {/* Other Menu Part */}
        <div className="h-full w-full flex flex-col">
          <div className={`${true && 'grow'} px-5 overflow-y-auto overflow-x-hidden text-white`}>
            <ul className="space-y-2 overflow-hidden">
              <li className="text_ellipsis">
                <a href="" className="my-2 text-sm">Study lofi 📚</a>
              </li>
              <li className="text_ellipsis">
                <a href="" className="my-2 text-sm">Atomic Habits</a>
              </li>
            </ul>
          </div>

          <div className={`${false && 'grow'}`}>
            <ul className="menu_list">
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