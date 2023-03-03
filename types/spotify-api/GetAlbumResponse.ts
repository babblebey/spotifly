export default interface GetAlbumResponse {
    album_group:            string;
    album_type:             string;
    artists:                Artist[];
    available_markets:      string[];
    copyrights:             Copyright[];
    external_ids:           ExternalIds;
    external_urls:          ExternalUrls;
    genres:                 any[];
    href:                   string;
    id:                     string;
    images:                 Image[];
    is_playable:            boolean;
    label:                  string;
    name:                   string;
    popularity:             number;
    release_date:           Date;
    release_date_precision: string;
    total_tracks:           number;
    tracks:                 Tracks;
    type:                   string;
    uri:                    string;
}

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

export type Id = "1XavfPKBpNjkOfxHINlMHF";

export type Name = "Joeboy";

export type ArtistType = "artist";

export type Uri = "spotify:artist:1XavfPKBpNjkOfxHINlMHF";

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIds {
    upc: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export interface Tracks {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    preview_url:       string;
    track_number:      number;
    type:              ItemType;
    uri:               string;
}

export type ItemType = "track";
