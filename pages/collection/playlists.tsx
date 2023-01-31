import { NextPage } from "next";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistCard from "../../components/PlaylistCard";
import { PlayIcon } from "../../icons";

interface PlaylistsProps {
    items: object[]
}

const Playlists: NextPage<PlaylistsProps> = ({ items }) => {
    const list = [1,2,3,4,5,6,7,8,9];

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" isLoggedIn />

            <main className="content">
                <div className="space-y-5 section @container/section">
                    <div className="flex items-center">
                        <p className="_title">
                            Playlists
                        </p>
                    </div>

                    <div className="items @container-normal gap-y-6">
                        <div className="library_card group bg-gradient-to-br from-[#450af5] to-[#8e8ee5]">
                            <div className="grow">

                            </div>
                            <div className="space-y-2">
                                <a href="" className="text-3xl font-black">
                                    Liked Songs
                                </a>
                                <p>
                                    9 liked songs
                                </p>
                            </div>
                            <button className="play_button_hide_show h-12 w-12 m-4 shaodow-lg shadow-sdark-53">
                                <PlayIcon width={24} height={24} />
                            </button>
                        </div>

                        { list.map((i, l) => (
                            <PlaylistCard key={i} />
                        )) }
                    </div>
                </div>
            </main>

            <PageFooter isLoggedIn />
        </div>    
    )
}   

export default Playlists