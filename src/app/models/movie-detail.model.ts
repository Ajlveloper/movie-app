interface IMovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    casts: ICasts;
    videos: IVideos;
    images: IImages;
    releases: IReleases;
}

interface IGenre {
    id: number;
    name: string;
}

interface IProductionCompany {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface ICasts {
    cast: ICast[];
    crew: ICast[];
}

interface ICast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: TDepartment;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
    department?: TDepartment;
    job?: string;
}

type TDepartment = "Acting"
    | "Crew"
    | "Writing"
    | "Directing"
    | "Production"
    | "Editing"
    | "Sound"
    | "Art"
    | "Visual Effects"
    | "Camera"
    | "Costume & Make-Up"
    | "Lighting";

interface IImages {
    backdrops: any[];
    logos: any[];
    posters: any[];
}

interface IReleases {
    countries: ICountry[];
}

interface ICountry {
    certification: string;
    descriptors: string[];
    iso_3166_1: string;
    primary: boolean;
    release_date: Date;
}

interface IVideos {
    results: IVideoResult[];
}

interface IVideoResult {
    iso_639_1: IEOriginalLanguage;
    iso_3166_1: IOriginCountry;
    name: string;
    key: string;
    site: ISite;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}

enum IEOriginalLanguage {
    En = "en",
}

enum IOriginCountry {
    Us = "US",
}

enum ISite {
    YouTube = "YouTube",
}

interface IMovieDetailsSection { label: string, value: string | Date };
interface IProfileCast { name: string, profile_path: string };

export {
    IMovieDetail,
    ICast,
    TDepartment,
    IMovieDetailsSection,
    IProfileCast,
}