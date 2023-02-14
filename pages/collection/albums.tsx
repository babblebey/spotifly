import { NextPage } from "next";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistSection from "../../components/PlaylistSection";

interface AlbumsProps {
    items: object[]
}

const Albums: NextPage<AlbumsProps> = ({ items }) => {
    const list = [1,2,3,4,5,6,7,8,9];

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" isLoggedIn className="bg-transparent" />

            <main className="content @container">
                <PlaylistSection title="Albums" />
            </main>

            <PageFooter isLoggedIn />
        </div>    
    )
}   

export default Albums