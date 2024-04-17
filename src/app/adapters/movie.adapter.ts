import { TDepartment, ICast, IMovieDetail } from "../models/movie-detail.model"

class MovieHandlerAdapter {
    static formatRating(rating: number) {
        return Math.round(rating) / 2
    }

    static getPublicClasification(releases: IMovieDetail['releases']) {
        const [firstRelease] = releases.countries;
        return firstRelease.certification;
    }

    static findByCrew(casts: IMovieDetail['casts']) {
        if (!casts) return null;
        const { crew } = casts;
        return {
            director: {
                value: this.findCrewByKeys(crew, 'Directing', 'director', 'find'),
                label: 'Director',
            },
            writers: {
                value: this.findCrewByKeys(crew, 'Writing', 'Writer', 'filter') || this.findCrewByKeys(crew, 'Writing', 'Novel', 'filter') || this.findCrewByKeys(crew, 'Writing', 'Screenplay', 'filter'),
                label: 'Writers',
            }, 
        }

    }

    static findCrewByKeys(crews: ICast[], department: TDepartment, job: string, filterType: 'filter' | 'find'): string {
        if (filterType === 'filter') {
            return crews
            .filter(crew => crew.department === department && crew.job?.toLowerCase() === job?.toLowerCase())
            .map(crew => crew.name).join(', ');
        }
        return crews.find(crew => crew.department === department && crew.job?.toLowerCase() === job?.toLowerCase())?.name || '';
    }

    static findByMovieCountry(productionCountries?: IMovieDetail['production_countries']): string {
        if (!productionCountries) return ''; 
        return productionCountries.map(country => country.name.split(' ').length > 2 ? country.iso_3166_1 : country.name).join(', ');
    }

    static formatCastProfile(casts: IMovieDetail['casts']) {
        const { cast } = casts
        const imageBaseUrl = 'https://image.tmdb.org/t/p/w780';
        return cast.filter(data => (data.department === 'Acting' || data.known_for_department === 'Acting'))
            .map(({ name, profile_path }) => ({ name, profile_path: profile_path ? `${imageBaseUrl}${profile_path}` : ''}))
    }
}

export {
    MovieHandlerAdapter
}