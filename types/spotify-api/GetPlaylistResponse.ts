/** Get a playlist owned by a Spotify user. 
 * 
 * @see https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
*/
export default interface GetPlaylistResponse {
    /** `true` if the owner allows other users to modify the playlist. */
    collaborative: boolean;
    /** The playlist description. Only returned for modified, verified playlists, otherwise `null`. */
    description:   string | null;
    /** Known external URLs for this playlist. */
    external_urls: ExternalUrls;
    /** Information about the followers of the playlist. */
    followers:     Followers;
    /** A link to the Web API endpoint providing full details of the playlist. */
    href:          string;
    /** The Spotify ID for the playlist. */
    id:            string;
    /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. 
     * 
     * @see https://developer.spotify.com/documentation/general/guides/working-with-playlists/
     * 
     * Note: If returned, the source URL for the image `url` is temporary and will expire in less than a day. 
    */
    images:        Image[];
    /** The name of the playlist. */
    name:          string;
    /** The user who owns the playlist */
    owner:         Owner;
    primary_color: string;
    /** The playlist's public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, 
     * 
     * @see https://developer.spotify.com/documentation/general/guides/working-with-playlists/ 
     * */
    public:        boolean;
    /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
    snapshot_id:   string;
    /** The tracks of the playlist. */
    tracks:        Tracks;
    /** The object type: "playlist" */
    type:          string;
    /** The object type: "playlist */
    uri:           string;
}

/** Interface for External Urls */
export interface ExternalUrls {
    /** The Spotify URL for the object. */
    spotify: string;
}

/** Interface for Followers */
export interface Followers {
    /** This will always be set to null, as the Web API does not support it at the moment. */
    href:  string | null;
    /** The total number of followers. */
    total: number;
}

/** Interface for Track Album Image */
export interface Image {
    /** The image height in pixels. */
    height: number | null;
    /** The source URL of the image. */
    url:    string;
    /** The image width in pixels. */
    width:  number | null;
}

export interface Owner {
    display_name?: string;
    external_urls: ExternalUrls;
    href:          string;
    followers:     Followers;
    id:            string;
    type:          OwnerType;
    uri:           string;
    name?:         string;
}

export enum OwnerType {
    Artist = "artist",
    User = "user",
}

export interface Tracks {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string | null;
    offset:   number;
    previous: string | null;
    total:    number;
}

export interface Item {
    added_at:        Date;
    added_by:        Owner;
    is_local:        boolean;
    primary_color:   string | null;
    track:           Track;
    video_thumbnail: VideoThumbnail;
}

export interface Track {
    album:             Album;
    artists:           Owner[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    episode:           boolean;
    explicit:          boolean;
    external_ids:      Externalids;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track:             boolean;
    track_number:      number;
    type:              TrackType;
    uri:               string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Owner[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
    Single = "single",
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export interface Externalids {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}

export interface VideoThumbnail {
    url: string | null;
}
