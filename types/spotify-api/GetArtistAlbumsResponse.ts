export default interface GetArtistAlbumsResponse {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    album_group:            AlbumGroup;
    album_type:             AlbumType;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumGroup;
    uri:                    string;
}

export type AlbumGroup = "album" | "single" | "appears_on";

export type AlbumType = "album" | "single" | "compilation";

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          Type;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export type Type = "artist";

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export type ReleaseDatePrecision = "day";
