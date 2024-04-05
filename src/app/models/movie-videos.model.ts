interface IMoviesByVideos {
    id: number;
    results: IMovieByVideo[];
}

interface IMovieByVideo {
    iso_639_1: IISO639_1;
    iso_3166_1: IISO3166_1;
    name: string;
    key: string;
    site: ISite;
    size: number;
    type: VideoType;
    official: boolean;
    published_at: Date;
    id: string;
}

enum IISO3166_1 {
    Us = "US",
}

enum IISO639_1 {
    En = "en",
}

enum ISite {
    YouTube = "YouTube",
}

enum VideoType {
    Featurette = "Featurette",
    Teaser = "Teaser",
    Trailer = "Trailer",
}

export {
    IMoviesByVideos,
    IMovieByVideo,
}