export default interface GetUsersSavedEpisodesResponse {
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
    episode:  Episode;
}

export interface Episode {
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
    language:               string;
    languages:              string[];
    name:                   string;
    release_date:           Date;
    release_date_precision: string;
    resume_point:           ResumePoint;
    show:                   Show;
    type:                   string;
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

export interface ResumePoint {
    fully_played:       boolean;
    resume_position_ms: number;
}

export interface Show {
    available_markets:    string[];
    copyrights:           any[];
    description:          string;
    explicit:             boolean;
    external_urls:        ExternalUrls;
    href:                 string;
    html_description:     string;
    id:                   string;
    images:               Image[];
    is_externally_hosted: boolean;
    languages:            string[];
    media_type:           string;
    name:                 string;
    publisher:            string;
    total_episodes:       number;
    type:                 string;
    uri:                  string;
}
