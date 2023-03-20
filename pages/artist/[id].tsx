import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import ArtistSection from "../../components/ArtistSection";
import PageFooter from "../../components/PageFooter";
import PageHeader from "../../components/PageHeader";
import PlaylistSection from "../../components/PlaylistSection";
import SongListItem from "../../components/SongListItem";
import { VerifyIcon, PlayIcon, ThreeDotsIcon } from "../../icons";
import { getToken } from "next-auth/jwt";
import { GetArtistAlbumsResponse, GetArtistRelatedArtistsResponse, GetArtistResponse } from "../../types/spotify-api";
import FormatNumber from "../../components/FormatNumber";
import { GetArtistTopTracksResponse } from "../../types/spotify-api";
import { useSession, signIn } from "next-auth/react";
import Loading from "../../components/Loading";
import { usePalette } from "react-palette";

import sampleData from "../../data/artistData.json"


interface ArtistProps {
    artistData: GetArtistResponse;
    topTracksData: GetArtistTopTracksResponse;
    appearsOnData: GetArtistAlbumsResponse;
    discographyData: GetArtistAlbumsResponse;
    relatedArtistsData: GetArtistRelatedArtistsResponse
}

const Artist: NextPage<ArtistProps> = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { status } = useSession();
    const { data: palette } = usePalette(data.artistData.images[0].url as string)
    
    // Loading Status
    if (status === 'loading') {
        return <Loading />
    }
    
    // Not LoggedIn Status
    if (status === 'unauthenticated') {
        signIn();
        
        return <Loading />
    }

    const { artistData, topTracksData, appearsOnData, discographyData, relatedArtistsData } = data as ArtistProps;
    
    const { id, name, images, followers } = artistData;
    const { tracks } = topTracksData;
    const { items: artistAppearsOn } = appearsOnData;
    const { items: artistDiscogreaphy } = discographyData;
    const { artists: relatedArtists } = relatedArtistsData;
    
    console.log(data)
    
    return (
        <div>
            <Head>
                <title>Spotifly - { name }</title>
            </Head>

            <PageHeader variant="playlist" title={ name } backgroundColor={palette?.darkMuted} />

            <main className="@container section -mt-20">
                {/* Top Section */}
                <div className="bg-cover h-[28rem] bg-no-repeat w-full" style={{ backgroundImage: `url(${images[0].url})` }}>
                    <div className="content_x_padded h-full space-y-2 flex items-end bg-black bg-opacity-25 pb-8">
                        <div className="w-full text-white space-y-3">
                            <div className="flex items-center space-x-2">
                                <VerifyIcon width={24} height={24} className="" />
                                <h2 className="text-sm">
                                    Verified Artist
                                </h2>
                            </div>
                            <h3 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                { name }
                            </h3>
                            <p>
                                <FormatNumber value={ followers.total } /> followers
                            </p>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative bg-sdark-base">
                    <div className="absolute w-full h-60 opacity-50" 
                        style={{ background: `linear-gradient(to bottom, ${ palette?.darkMuted }, #121212)` }}
                    />
                    <div className="content_max_w_x_padded relative flex items-center space-x-7 py-6">
                        <button className="play_button bg-sgreen-100 h-14 w-14">
                            <PlayIcon width={28} height={28} />
                        </button>
                        <button className="border border-white text-white text-sm px-4 py-1 rounded font-bold uppercase">
                            Following
                        </button>
                        <button>
                            <ThreeDotsIcon color="#a7a7a7" width={22} height={22} />
                        </button>
                    </div>
                </div>

                {/* Popular Songs and Artist Pick Section */}
                <div className="bg-sdark-base">
                    <div className="content_max_w_x_padded relative">
                        <div className="grid gap-y-6 gap-x-6 grid-cols-4 @cmd:grid-cols-5 @clg:grid-cols-6 @cxl:grid-cols-7 @c2xl:grid-cols-8 @c3xl:grid-cols-9">
                            <div className="col-span-4 space-y-4 @cmd:col-span-3 @clg:col-span-4 @cxl:col-span-5 @c2xl:col-span-6 @c3xl:col-span-6">
                                <h3 className="_title">
                                    Popular
                                </h3>

                                <div>
                                    { tracks.map((track, i) => (
                                        <SongListItem key={i} data={ track } index={i + 1} variant="artist" />
                                    )) }
                                </div>

                                <a href="" className="text-swhite-subdued hover:text-white uppercase text-sm block font-bold">
                                    See More
                                </a>
                            </div>
                            <div className="col-span-4 @cmd:col-span-2 @cxl:col-span-2 @c2xl:col-span-2 @c3xl:col-span-3">
                                <h3 className="_title">
                                    Artist Pick
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Playlists Section */}
                <div className="content_max_w_x_padded space-y-10 mt-10">
                    {/* <PlaylistSection title="Feature Eluzai" hideOverflow /> */}

                    <ArtistSection title="Fans also like" items={ relatedArtists } hideOverflow />

                    <PlaylistSection title="Appears On" items={ artistAppearsOn } withPlayBtn hideOverflow />
                </div>

                {/* About Section */}
                <div className="content_max_w_x_padded space-y-2 my-10">
                    <h2 className="_title">
                        About
                    </h2>
                    
                    <div className="sgrid">
                        <div className="col-span-2 @cxs:col-span-3 @clg:col-span-4 min-h-fit h-[400px] bg-no-repeat bg-cover rounded-md hover:scale-[102%] transition-transform duration-100"
                            style={{ backgroundImage: `url(${ images[0].url })` }}
                        >
                            <div className="bg-black bg-opacity-40 h-full w-full flex flex-col p-10 space-y-4 justify-end text-white">
                                <h2 className="text-4xl font-bold">
                                    { name }
                                </h2>
                                <span className="font-bold">
                                    <FormatNumber value={ followers.total } /> followers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <PageFooter />
        </div>
    );
}

export default Artist

export const getServerSideProps: GetServerSideProps = async ({ req, params }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken };

    const artist = await fetch(`https://api.spotify.com/v1/artists/${params?.id}`, { headers });
    const artistData = await artist.json();

    const topTracks = await fetch(`https://api.spotify.com/v1/artists/${params?.id}/top-tracks?market=NG`, { headers });
    const topTracksData = await topTracks.json();

    const appearsOn = await fetch(`https://api.spotify.com/v1/artists/${params?.id}/albums?include_groups=appears_on`, { headers });
    const appearsOnData = await appearsOn.json();

    const discography = await fetch(`https://api.spotify.com/v1/artists/${params?.id}/albums?include_groups=album,single,compilation`, { headers });
    const discographyData = await discography.json();

    const relatedArtists = await fetch(`https://api.spotify.com/v1/artists/${params?.id}/related-artists`, { headers });
    const relatedArtistsData = await relatedArtists.json();

    const data: ArtistProps = { artistData, topTracksData, appearsOnData, discographyData, relatedArtistsData }

    return {
        props: { data }
    }
}