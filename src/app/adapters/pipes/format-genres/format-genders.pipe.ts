import { Pipe, PipeTransform } from '@angular/core';
import { IMovieDetail } from '../../../models/movie-detail.model';

@Pipe({
  name: 'formatGenders',
  standalone: true
})
export class FormatGendersPipe implements PipeTransform {
  transform(genres: IMovieDetail['genres'], ...args: unknown[]): string {
    if (!genres.length) return '';
    return genres.map(genre => genre.name).slice(0, 5).join(', ');
  }
}
