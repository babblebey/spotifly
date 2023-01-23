import { FC } from "react"
import Image from "next/image";
import { HomeIcon, SearchIcon, LibraryIcon, DownloadIcon, HeartIcon, PlusIcon } from "../icons";

interface NavbarProps {
  
}
 
const Navbar: FC<NavbarProps> = () => {
  return ( 
    <nav className="bg-black flex grow-0 w sm:w-[180px] md:w-[300px] relative select-none" id="sidebar">
      {/* Resizer */}
      <div className="absolute h-full w-2 z-30 right-0 top-0 hover:border-r hover:border-gray-400 hover:cursor-e-resize active:cursor-col-resize" id="resizer" />

      {/* Nav Body */}
      <div className="flex flex-col w_inherit">
        {/* Logo Area */}
        <div className="p-5">
          <Image src="/spotifly-w.svg" height={40} width={131} className="object-contain" alt="Spotifly" />
        </div>

        {/* First Menu List */}
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

        {/* Second Menu List */}
        <ul className="menu_list">
          <li className="menu_list_item">
            <a href="" className={`menu_link`}>
              <div className="menu_link_icon_wrap bg-white">
                <PlusIcon width={12} height={12} />
              </div>
              <p>Create Playlist</p>
            </a>
          </li>
          <li className="menu_list_item">
            <a href="" className={`menu_link`}>
              <div className="menu_link_icon_wrap bg-gradient-to-br from-[#450af5] to-[#c4efd9]">
                <HeartIcon width={12} height={12} />
              </div>
              <p>Liked Songs</p>
            </a>
          </li>
        </ul>

        {/* Divider */}
        <div className="px-5 opacity-30">
          <hr />
        </div>

        {/* Other Menu Part */}
        <div></div>

      </div>
    </nav>  
  );
}
 
export default Navbar;