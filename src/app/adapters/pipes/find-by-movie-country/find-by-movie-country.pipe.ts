import { Pipe, PipeTransform } from '@angular/core';
import { IMovieDetail } from '../../../models/movie-detail.model';

@Pipe({
  name: 'findByMovieCountry',
  standalone: true
})
export class FindByMovieCountryPipe implements PipeTransform {

  transform(productionCountries?: IMovieDetail['production_countries'], ...args: unknown[]): string {
    if (!productionCountries) return ''; 
    return productionCountries.map(country => country.name.split(' ').length > 2 ? country.iso_3166_1 : country.name).join(', ');
  }

}
