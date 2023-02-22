import { NextPage } from 'next'
import Head from "next/head"
import Image from "next/image"
import PageFooter from "../../components/PageFooter"
import PageHeader from "../../components/PageHeader"
import SongListItem from "../../components/SongListItem"
import PlaylistSection from "../../components/PlaylistSection"
import { PlayIcon, HeartOutlineIcon, ThreeDotsIcon } from "../../icons"

interface TrackProps {

}

const Track: NextPage<TrackProps> = ({}) => {
    const list = [1,2,3,4,5]

    return (
        <div>
            <Head>
                <title>Spotifly - Track name</title>
            </Head>

            <PageHeader variant="playlist" />

            <main className="@container">
                {/* Top Section */}
                <div className="content_x_padded bg-[#b02020] bg-opacity-60 pb-10 pt-20">
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit @csm:w-72 shadow-lg shadow-black">
                            <Image src={'/t1.jfif'} width={280} height={280} className="object-contain" alt="title" />
                        </div>
                        <div className="w-full text-white text-sm space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Song
                            </h2>
                            <h3 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                Song title
                            </h3>
                            <div className="text-sm text-white flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                    <Image src={'/ac1.jfif'} width={25} height={25} alt="title" className="rounded-full" />
                                    <p className="font-bold">Artist Name</p>
                                </div>
                                <p>2022</p>
                                <p>2:25</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative">
                    <div className="absolute w-full h-52 bg-gradient-to-b from-[#b02020] to-sdark-bass opacity-50 -z-10" />
                    <div className="relative content_max_w_x_padded flex items-center space-x-7 py-6">
                        <button className="play_button bg-sgreen-100 h-14 w-14">
                            <PlayIcon width={28} height={28} />
                        </button>
                        <button>
                            <HeartOutlineIcon color="#a7a7a7" width={28} height={28} />
                        </button>
                        <button>
                            <ThreeDotsIcon color="#a7a7a7" width={22} height={22} />
                        </button>
                    </div>
                </div>

                {/* Artist Section */}
                <div className="content_max_w_x_padded">
                    <div className="p-2 flex items-center w--full space-x-4 rounded-md hover:bg-sdark-53 hover:bg-opacity-40">
                        <div className="rounded-full overflow-hidden">
                            <Image src={'/ac1.jfif'} width={80} height={80} alt="title" />
                        </div>
                        <div className="text-white font-bold space-y-1">
                            <p className="text-xs uppercase">Artist</p>
                            <a href="" className="hover:underline">
                                Artist Name
                            </a>
                        </div>
                    </div>
                </div>

                {/* Popular Songs */}
                <div className="content_max_w_x_padded relative mt-10">
                    <div className="col-span-4 space-y-4 @cmd:col-span-3 @clg:col-span-4 @cxl:col-span-5 @c2xl:col-span-6 @c3xl:col-span-6">
                        <div className="space-y-1">
                            <span className="text-sm text-swhite-subdued">
                                Popular Tracks by
                            </span>
                            <h3 className="_title">
                                Artist Name
                            </h3>
                        </div>

                        <div>
                            { list.map((v, i) => (
                                <SongListItem key={i} index={i + 1} variant="artist" />
                            )) }
                        </div>
                        
                        <a href="" className="text-swhite-subdued hover:text-white uppercase text-sm block font-bold">
                            See More
                        </a>
                    </div>
                </div>

                {/* Related Playlist */}
                <div className="content_max_w_x_padded mt-10 space-y-10">
                    <PlaylistSection title="Popular Releases by Artist Name" hideOverflow />

                    <PlaylistSection title="Popular Albums by Artist Name" hideOverflow />

                    <PlaylistSection title="Popular Singles and EPs by Artist Name" hideOverflow />
                </div>

                <div className="content_max_w_x_padded mt-10">
                    <div className="flex items-center w-full space-x-4 rounded-tr-lg bg-sdark-el-base-highlight hover:bg-sdark-53 mb-[1px]">
                        <div className="rounded-tl-md overflow-hidden">
                            <Image src={'/t1.jfif'} width={80} height={80} alt="title" />
                        </div>
                        <div className="text-white space-y-1">
                            <p className="text-xs">From the album</p>
                            <a href="" className="font-bold hover:underline">
                                Album name
                            </a>
                        </div>
                    </div>

                    <div>
                        { list.map((_, i) => (
                            <SongListItem key={i} variant="album" index={i+1} />
                        )) }
                    </div>
                </div>

                <div className="content_max_w_x_padded text-xs text-swhite-subdued mt-8 space-y-1">
                    <p>© 2022 Groovie Gang Entertainment</p>
                    <p>℗ 2022 Groovie Gang Entertainment</p>
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Track