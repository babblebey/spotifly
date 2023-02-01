import { FC } from "react";
import { TwitterIcon, InstagramIcon, FacebookIcon } from "../icons";

interface PageFooterProps {
    isLoggedIn: boolean
}
 
const PageFooter: FC<PageFooterProps> = ({ isLoggedIn }) => {
    return ( 
        <footer className="px-8 pt-8 mt-6 bg-sdark-base">
            {/* Navigations */}
            <div className="flex flex-col lg:flex-row justify-between text-swhite-subdued">
                {/* Links */}
                <div className="w-full lg:w-6/12 flex flex-1 flex-wrap">
                    <div className="w-36 md:w-52 mr-8 mb-8">
                        <ul className="space-y-3">
                            <p className="font-bold text-white">Company</p>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Job</a>
                            </li>
                            <li>
                                <a href="">For the Record</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-36 md:w-52 mr-8 mb-8">
                        <ul className="space-y-3">
                            <p className="font-bold text-white">Communities</p>
                            <li>
                                <a href="">For Artists</a>
                            </li>
                            <li>
                                <a href="">Developers</a>
                            </li>
                            <li>
                                <a href="">Advertising</a>
                            </li>
                            <li>
                                <a href="">Investors</a>
                            </li>
                            <li>
                                <a href="">Vendors</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-36 md:w-52 mr-8 mb-8">
                        <ul className="space-y-3">
                            <p className="font-bold text-white">Useful links</p>
                            <li>
                                <a href="">Support</a>
                            </li>
                            <li>
                                <a href="">Free Mobile App</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-3 mb-8">
                    <button className="bg-sdark-subdued hover:bg-sdark-53 w-10 h-10 flex items-center justify-center rounded-full">
                        <InstagramIcon color="white" width={16} height={16} />
                    </button>
                    <button className="bg-sdark-subdued hover:bg-sdark-53 w-10 h-10 flex items-center justify-center rounded-full">
                        <TwitterIcon color="white" width={16} height={16} />
                    </button>
                    <button className="bg-sdark-subdued hover:bg-sdark-53 w-10 h-10 flex items-center justify-center rounded-full">
                        <FacebookIcon color="white" width={16} height={16} />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full border-b border-sdark-subdued" />

            {/* Copyright */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 text-[#a7a7a7] py-10 text-sm justify-between">
                {isLoggedIn && (
                    // Quick links - Render when user isLoggedIn
                    <ul className="flex space-x-4">
                        <li>
                            <a href="">Legal</a>
                        </li>
                        <li>
                            <a href="">Privacy Centre</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Cookies</a>
                        </li>
                        <li>
                            <a href="">About Ads</a>
                        </li>
                    </ul>
                )}
                <p>
                    © 2023 Spotifly - a Spotify Clone
                </p>
            </div>
        </footer>
     );
}
 
export default PageFooter;