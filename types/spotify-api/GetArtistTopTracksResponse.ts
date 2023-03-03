export default interface GetArtistTopTracksResponse {
    tracks: Track[];
}

export interface Track {
    album:         Album;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      boolean;
    external_ids:  ExternalIds;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   string;
    track_number:  number;
    type:          TrackType;
    uri:           string;
}

export interface Album {
    album_group:            AlbumGroup;
    album_type:             AlbumGroup;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    is_playable:            boolean;
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumGroup;
    uri:                    string;
}

export type AlbumGroup = "single" | "album";

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            Id;
    name:          Name;
    type:          ArtistType;
    uri:           Uri;
}

export interface ExternalUrls {
    spotify: string;
}

export type Id = "6WRa5ohaBMu9somEwsvlGL" | "5H3acacLmK93wEdJWZhERU";

export type Name = "Clangon" | "trxxshed";

export type ArtistType = "artist";

export type Uri = "spotify:artist:6WRa5ohaBMu9somEwsvlGL" | "spotify:artist:5H3acacLmK93wEdJWZhERU";

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export type ReleaseDatePrecision = "day";

export interface ExternalIds {
    isrc: string;
}

export type TrackType = "track";
