import { IMovieAllAdapter, IMovieResult } from "../models/movies.model";

type TSize = 'w300' | "w780" | "w1280";

class MoviesHandlerAdapter {
    static getFirstMovieAdpater(movies: IMovieResult[]):IMovieResult {
        const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
        const [firstMovie] = movies.map(movie => ({
            ...movie,
            backdrop_path: `${imageBaseUrl}${movie?.backdrop_path}`,
            poster_path: `${imageBaseUrl}${movie?.poster_path}`
        }))
        return firstMovie
    }

    static getMoviesAllAdapter(movies: IMovieResult[]): IMovieAllAdapter[] {
        const imageBaseUrl = 'https://image.tmdb.org/t/p/w780'
        return movies?.map(movie => ({
            image: movie?.poster_path ? `${imageBaseUrl}${movie?.poster_path}` : '',
            title: movie?.title, id: movie.id,
        }))
    }
    static formatImage(image: string, size?: TSize):string {
        const imageBaseUrl = `https://image.tmdb.org/t/p/${size || 'original'}`;
        return image ? `${imageBaseUrl}${image}` : '';
    }
}

export {
    MoviesHandlerAdapter
}