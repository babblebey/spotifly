import { NextPage } from "next";
import Head from "next/head";
import BrowseCard from "../components/BrowseCard";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";
import SearchHeader from "../components/SearchHeader";
import SearchResult from "../components/SearchResult";

interface SearchProps {

}

const Search: NextPage<SearchProps> = ({}) => {
    const list = [1,2,3,4,5,6,7,8,9];

    return (
        <div>
            <Head>
                <title>Spotifly - Search</title>
            </Head>

            <PageHeader variant="search" className="bg-transparent" />

            <main className="@container">
                <SearchHeader />

                {false && (
                    <div className="content_max_w_x_padded pt-4 space-y-5 section">
                        <div className="flex items-center">
                            <p className="_title">
                                Browse all
                            </p>
                        </div>

                        <div className="items gap-y-6">
                            { list.map((i, l) => (
                                <BrowseCard num={i} />
                            )) }
                        </div>
                    </div>
                )}

                <SearchResult />
            </main>

            <PageFooter />
        </div>
    )
}   

export default Search