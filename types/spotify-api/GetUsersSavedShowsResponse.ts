export default interface GetUsersSavedShowsResponse {
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
    show:     Show;
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

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}
