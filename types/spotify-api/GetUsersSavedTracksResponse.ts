export default interface GetUsersSavedTracksResponse {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    added_at: Date;
    track:    Track;
}

export interface Track {
    album:             Album;
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIds;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track_number:      number;
    type:              TrackType;
    uri:               string;
}

export interface Album {
    album_group:            AlbumGroupEnum;
    album_type:             AlbumGroupEnum;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    is_playable:            boolean;
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumType;
    uri:                    string;
}

export type AlbumGroupEnum = "single";

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          ArtistType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export type ArtistType = "artist";

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export type ReleaseDatePrecision = "day";

export type AlbumType = "album";

export interface ExternalIds {
    isrc: string;
}

export type TrackType = "track";
