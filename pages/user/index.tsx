import { NextPage } from "next";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import { UserIcon, ThreeDotsIcon } from "../../icons";
import PlaylistSection from "../../components/PlaylistSection";
import ArtistSection from "../../components/ArtistSection";
import { useEffect, useState } from "react";
import useScroll, { scrollData } from "../../hooks/useScroll";
import SongListItem from "../../components/SongListItem";

interface UserProps {

}

const User: NextPage<UserProps> = ({}) => {
    const [bgColor, setBgColor] = useState('bg-transparent');

    useEffect(() => {
        useScroll({
            element: document.querySelector('.page') as HTMLElement,
            callback({ scrollTop }: scrollData) {
                scrollTop > 80 ? setBgColor('bg-sdark-el-base') : setBgColor('bg-transparent');
            },
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Spotifly - User</title>
            </Head>

            <PageHeader variant="title" className={bgColor} />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_max_w_x_padded bg-sdark-el-base-highlight bg-opacity-60 pb-10 pt-32">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="flex items-center justify-center h-52 w-52 mb-2 bg-sdark-el-base shadow-lg shadow-black rounded-full overflow-hidden">
                            <UserIcon width={40} height={40} className="fill-swhite-subdued" />
                        </div>
                        <div className="text-white space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Profile
                            </h2>
                            <h2 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                Username
                            </h2>
                            <p className="text-base">
                                1 Public Playlist 4 Following
                            </p>
                        </div>
                    </div>
                </div>

                {/* More Section */}
                <div className="relative">
                    <div className="absolute w-full h-60 bg-gradient-to-b from-bg-sdark-el-base-highlight to-sdark-base opacity-50 -z-10" />
                    <div className="content_max_w_x_padded flex items-center py-6">
                        <button className="group">
                            <ThreeDotsIcon width={22} height={22} className="fill-swhite-subdued group-hover:text-white" />
                        </button>
                    </div>
                </div>
        
                {/* Artists Section */}
                <div className="content_max_w_x_padded space-y-10">
                    <ArtistSection title="Top artist this month" subtitle="Only visible to you" withPlayBtn items={[1,1,1]} hideOverflow />
                </div>

                {/* Songs List */}
                <div className="content_max_w_x_padded mt-10">
                    {/* Heading */}
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="" className="block _title hover:underline">
                                Top tracks this month
                            </a>
                            <span className="text-sm  text-swhite-subdued">
                                Only visible to you
                            </span>
                        </div>
                        <a href="" className="font-bold text-sm text-swhite-subdued hover:underline">
                            Show all
                        </a>
                    </div>

                    {/* List */}
                    <div className="mt-4">
                        {[1,1,1,1].map((_, i) => (
                            <SongListItem key={i} index={i + 1} variant="user" />
                        ))}
                    </div>
                </div>

                {/* Artists Section */}
                <div className="content_max_w_x_padded mt-10">
                    <ArtistSection title="Following" items={[1,1,1,1]} hideOverflow />
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default User