export default interface GetShowResponse {
    available_markets:    string[];
    copyrights:           any[];
    description:          string;
    episodes:             Episodes;
    explicit:             boolean;
    external_urls:        ExternalUrls;
    href:                 string;
    html_description:     string;
    id:                   string;
    images:               Image[];
    is_externally_hosted: boolean;
    languages:            Language[];
    media_type:           string;
    name:                 string;
    publisher:            string;
    total_episodes:       number;
    type:                 string;
    uri:                  string;
}

export interface Episodes {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    audio_preview_url:      string;
    description:            string;
    duration_ms:            number;
    explicit:               boolean;
    external_urls:          ExternalUrls;
    href:                   string;
    html_description:       string;
    id:                     string;
    images:                 Image[];
    is_externally_hosted:   boolean;
    is_playable:            boolean;
    language:               Language;
    languages:              Language[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    type:                   Type;
    uri:                    string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export type Language = "en";

export type ReleaseDatePrecision = "day";

export type Type = "episode";