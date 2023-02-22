import { NextPage } from "next";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import ArtistSection from "../../components/ArtistSection";

interface ArtistsProps {
    items: object[]
}

const Artists: NextPage<ArtistsProps> = ({ items }) => {
    const list = [1,2,3];

    return (
        <div className="relative">
            <Head>
                <title>Spotifly - Your Library</title>
            </Head>

            <PageHeader variant="library" className="bg-transparent" />

            <main className="content @container">
                <ArtistSection title="Artists" />
            </main>

            <PageFooter />
        </div>    
    )
}   

export default Artists