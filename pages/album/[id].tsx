import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import PageHeader from "../../components/PageHeader";
import PageFooter from "../../components/PageFooter";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PlayIcon, ThreeDotsIcon, TimerIcon, HeartOutlineIcon } from "../../icons";
import HeartOulineIcon from "../../icons/HeartOutlineIcon";
import SongListItem from "../../components/SongListItem";
import PlaylistSection from "../../components/PlaylistSection";
import { getToken } from "next-auth/jwt";
import moment from "moment";
import useScroll, { scrollData } from "../../hooks/useScroll";
import { GetAlbumResponse, GetArtistResponse } from "../../types/spotify-api";
import Link from "next/link";
import { usePalette } from "react-palette";
import { useSession, signIn } from "next-auth/react";
import Loading from "../../components/Loading";

import sampleData from "../../data/albumData.json"

interface AlbumProps {
    albumData: GetAlbumResponse;
    artistData: GetArtistResponse;
}

const Album: NextPage<AlbumProps> = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // console.log(data)
    const { status } = useSession()
    const [scrolled, setScrolled] = useState(false);
    const { data: palette } = usePalette(data.albumData.images[0].url);

    useEffect(() => {
        useScroll({
            element: document.querySelector('.page') as HTMLElement,
            callback({ scrollTop }: scrollData) {
                scrollTop > 300 ? setScrolled(true) : setScrolled(false);
            }
        })
    }, [])
    
    // Loading Status
    if (status === 'loading') {
        return <Loading />
    }
    
    // Not LoggedIn Status
    if (status === 'unauthenticated') {
        signIn();
        
        return <Loading />
    }

    const { albumData, artistData } = data as AlbumProps;

    const { id, name, artists, images, album_type, tracks, total_tracks, release_date, copyrights } = albumData as GetAlbumResponse;


    // console.log(palette)

    return (
        <div>
            <Head>
                <title>Spotifly - { name }</title>
            </Head>

            <PageHeader variant="playlist" title={ name } backgroundColor={ palette?.darkMuted } />

            <main className="@container -mt-24">
                {/* Top Section */}
                <div className="content_x_padded bg-opacity-60 pb-10 pt-32"
                    style={{ backgroundColor: palette?.darkMuted }}
                >
                    <div className="flex flex-col h-full self-align-end space-y-2 space-x-0 @csm:space-y-0 @csm:space-x-6 @csm:flex-row @csm:items-end">
                        <div className="w-fit @csm:w-72 shadow-xl shadow-black">
                            <Image src={ images[0]?.url } width={280} height={280} className="object-contain" alt="title " />
                        </div>
                        <div className="w-full text-white text-sm space-y-3">
                            <h2 className="font-bold uppercase text-xs">
                                { album_type }
                            </h2>
                            <h3 className="text-4xl @cxs:text-5xl @cmd:text-7xl font-black">
                                { name }
                            </h3>
                            <div className="text-sm text-white flex items-center space-x-1">
                                <div className="flex items-center space-x-1">
                                    <Image src={ images[0]?.url } width={25} height={25} alt="title" className="rounded-full" />
                                    
                                    <Link href={`/artist/${artists[0].id}`} className="font-bold hover:underline">
                                        { artists[0]?.name }
                                    </Link>
                                </div>
                                <span>{'•'}</span> 
                                <p>
                                    { moment(release_date).format('YYYY') }
                                </p>
                                <span>{'•'}</span> 
                                <p>
                                    { total_tracks } songs,
                                    {' '}
                                    <span className="text-swhite-subdued">
                                        36 min 20 sec
                                    </span>
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
                            <HeartOulineIcon color="#a7a7a7" width={28} height={28} />
                        </button>
                        <button>
                            <ThreeDotsIcon color="#a7a7a7" width={22} height={22} />
                        </button>
                    </div>
                </div>

                {/* Songs List */}
                <div>
                    {/* Heading */}
                    <div className={`${scrolled && 'bg-sdark-base border-b border-sdark-subdued'} content_max_w_x_padded sticky top-16 z-30 group text-swhite-subdued uppercase text-sm`}>
                        <div className={`grid grid-cols-albslist gap-x-4 px-5 py-2 ${!scrolled && 'border-b border-sdark-subdued'}`}>
                            <div className="w-fit">
                                #
                            </div>
                            <div>
                                Title
                            </div>
                            <div className="mr-12 justify-self-end">
                                <TimerIcon color="#a7a7a7" width={18} height={18} />
                            </div>
                        </div>
                    </div>

                    {/* List */}
                    <div className="content_max_w_x_padded mt-3">
                        {tracks?.items.map((item, i) => (
                            <SongListItem key={i} data={ item } variant="album" index={i + 1} />
                        ))}
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="content_max_w_x_padded text-xs text-swhite-subdued mt-8 space-y-1">
                    <p className="text-sm">
                        { moment(release_date).format('MMMM D, YYYY') }
                    </p>

                    {/* Copyrights */}
                    { copyrights?.map((copy, i) => (
                        <p>
                            { copy.type === 'P' ? '℗' : '©' } { copy.text }
                        </p>
                    )) } 
                </div>

                <div className="content_max_w_x_padded mt-10">
                    {/* <PlaylistSection title="More by Artist Name" items={} hideOverflow /> */}
                </div>
            </main>

            <PageFooter />
        </div>
    )
}

export default Album

export const getServerSideProps: GetServerSideProps = async ({ req, params }: GetServerSidePropsContext) => {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });
    const headers = { 'Authorization': 'Bearer ' + token?.accessToken };

    const album = await fetch(`https://api.spotify.com/v1/albums/${params?.id}`, { headers });
    const albumData = await album.json() as GetAlbumResponse;

    const artist = await fetch(albumData.artists[0].href, { headers });
    const artistData = await artist.json();

    const data: AlbumProps = { albumData, artistData }

    return {
        props: { data }
    }
}