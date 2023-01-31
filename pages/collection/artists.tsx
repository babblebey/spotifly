import { NextPage } from "next";
import Head from "next/head";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import ArtistCard from "../../components/ArtistCard";

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

            <PageHeader variant="library" isLoggedIn />

            <main className="content">
                <div className="space-y-5 section @container/section">
                    <div className="flex items-center">
                        <p className="_title">
                            Artists
                        </p>
                    </div>

                    <div className="items @container-normal gap-y-6">
                        { list.map((i, l) => (
                            <ArtistCard key={i} />
                        )) }
                    </div>
                </div>
            </main>

            <PageFooter isLoggedIn />
        </div>    
    )
}   

export default Artists