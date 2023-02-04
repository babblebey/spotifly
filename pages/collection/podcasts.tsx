import { NextPage } from "next";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistCard from "../../components/PlaylistCard";
import { PlayIcon } from "../../icons";

interface PodcastsProps {
    items: object[]
}

const Podcasts: NextPage<PodcastsProps> = ({ items }) => {
    const list = [1,2,3];

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" isLoggedIn />

            <main className="content @container">
                <div className="space-y-5 section">
                    <div className="flex items-center">
                        <p className="_title">
                            Podcasts
                        </p>
                    </div>

                    <div className="items gap-y-6">
                        <div className="top_card group bg-gradient-to-br from-[#00644e] to-[#27856a]">
                            <div className="grow">

                            </div>
                            <div className="space-y-2">
                                <a href="" className="text-3xl font-black">
                                    Your Episodes
                                </a>
                                <p>
                                    9 episodes
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

export default Podcasts