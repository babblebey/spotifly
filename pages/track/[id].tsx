import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import PageFooter from "../../components/PageFooter"
import PageHeader from "../../components/PageHeader"
import SongListItem from "../../components/SongListItem"
import PlaylistSection from "../../components/PlaylistSection"
import { PlayIcon, HeartOutlineIcon, ThreeDotsIcon } from "../../icons"
import { getToken } from "next-auth/jwt"
import { GetAlbumResponse, GetArtistResponse, GetArtistTopTracksResponse, GetTrackResponse } from "../../types/spotify-api"
import moment from "moment"
import Loading from "../../components/Loading"
import { useSession, signIn } from "next-auth/react"
import { usePalette } from "react-palette"

import sampleData from "../../data/trackData.json"

interface TrackProps {
    trackData: GetTrackResponse;
    albumData: GetAlbumResponse;
    artistData: GetArtistResponse;
    topTracksData: GetArtistTopTracksResponse
}

const Track: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data)
    const { status } = useSession()
    const { data: palette } = usePalette(data.trackData.album.images[0].url)
       
    // Loading Status
    if (status === 'loading') {
        return <Loading />
    }
    
    // Not LoggedIn Status
    if (status === 'unauthenticated') {
        signIn();
        
        return <Loading />
    }

    const { trackData, albumData, artistData, topTracksData } = data as TrackProps;

    return (
        <div>
            <Head>
                <title>Spotifly - { trackData.name }</title>
            </Head>

            <PageHeader variant="playlist" title={ trackData.name } backgroundColor={ palette?.darkMuted } />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-opacity-60 pb-10 pt-32"
                    style={{ backgroundColor: palette?.darkMuted }}
                >
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit @csm:w-72 shadow-lg shadow-black">
                            <Image src={ albumData.images[0].url } width={280} height={280} className="object-contain" alt="title" />
                        </div>
                        <div className="w-full text-white text-sm space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                Song
                            </h2>
                            <h3 className="text-4xl @cxs:text-6xl @cmd:text-8xl font-black">
                                { trackData.name }
                            </h3>
                            <div className="text-sm text-white flex items-center space-x-1">
                                <div className="flex items-center space-x-1">
                                    <Image src={ albumData.images[0].url } width={25} height={25} alt="title" className="rounded-full" />
                                    <p className="font-bold">{ trackData.artists[0].name }</p>
                                </div>
                                <span>{'•'}</span> 
                                <p>
                                    { moment(albumData.release_date).format('YYYY') }
                                </p>
                                <span>{'•'}</span> 
                                <p>
                                    { moment(trackData.duration_ms).format('mm:ss') }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Play Section */}
                <div className="relative">
                    <div className="absolute w-full h-52 opacity-50 -z-10" 
                        style={{ background: `linear-gradient(to bottom, ${ palette?.darkMuted }, #121212)` }}
                    />
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
                            <Image src={ artistData.images[0].url } width={80} height={80} alt={ artistData.name } />
                        </div>
                        <div className="text-white font-bold space-y-1">
                            <p className="text-xs uppercase">Artist</p>
                            <a href="" className="hover:underline">
                                { artistData.name }
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
                            <Link href={`/artists/${artistData.id}`} className="_title block">
                                { artistData.name }
                            </Link>
                        </div>

                        <div>
                            { topTracksData.tracks.map((track, i) => (
                                <SongListItem key={i} data={ track } index={i + 1} variant="artist" />
                            )) }
                        </div>
                        
                        <a href="" className="text-swhite-subdued hover:text-white uppercase text-sm block font-bold">
                            See More
                        </a>
                    </div>
                </div>

                {/* Related Playlist */}
                <div className="content_max_w_x_padded mt-10 space-y-10">
                    {/* <PlaylistSection title={`Popular Releases by ${ artists[0].name }`} hideOverflow />

                    <PlaylistSection title={`Popular Albums by ${ artists[0].name }`} hideOverflow />

                    <PlaylistSection title={`Popular Singles and EPs by ${ artists[0].name }`} hideOverflow /> */}
                </div>

                <div className="content_max_w_x_padded mt-10">
                    <div className="flex items-center w-full space-x-4 rounded-tr-lg bg-sdark-el-base-highlight hover:bg-sdark-53 mb-[1px]">
                        <div className="rounded-tl-md overflow-hidden">
                            <Image src={ albumData.images[1].url } width={80} height={80} alt="title" />
                        </div>
                        <div className="text-white space-y-1">
                            <p className="text-xs">From the album</p>
                            <Link href={`/album/${albumData.id}`} className="font-bold hover:underline">
                                { albumData.name }
                            </Link>
                        </div>
                    </div>

                    <div>
                        { albumData.tracks.items.map((item, i) => (
                            <SongListItem key={i} data={ item } variant="album" index={i+1} />
                        )) }
                    </div>
                </div>

                {/* Copyrights */}
                <div className="content_max_w_x_padded text-xs text-swhite-subdued mt-8 space-y-1">
                    { albumData.copyrights?.map((copy, i) => (
                        <p key={i}>
                            { copy.type === 'P' ? '℗' : '©' } { copy.text }
                        </p>
                    )) } 
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Track

export const getServerSideProps: GetServerSideProps = async ({ req, params }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET as string;
    const token = await getToken({ req, secret })
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken }
    
    // const track = await fetch(`https://api.spotify.com/v1/tracks/${params?.id}`, { headers });
    // const trackData = await track.json() as GetTrackResponse;
    
    // const album = await fetch(trackData?.album.href, { headers });
    // const albumData = await album.json();
    
    // const artist = await fetch(trackData?.artists[0].href, { headers });
    // const artistData = await artist.json();

    // const topTracks = await fetch(`https://api.spotify.com/v1/artists/${trackData?.artists[0].id}/top-tracks?market=NG`, { headers });
    // const topTracksData = await topTracks.json()
    
    // const data: TrackProps = { trackData, albumData, artistData, topTracksData }

    return {
        props: { data: sampleData }
    }
}