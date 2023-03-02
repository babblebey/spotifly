export default interface GetFollowedArtistsResponse {
    items:   Item[];
    next:    string | null;
    total:   number;
    cursors: Cursors;
    limit:   number;
    href:    string;
}

export interface Cursors {
    after: string | null;
    before: string | null;
}

export interface Item {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          Type;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  string | null;
    total: number;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export type Type = "artist";
