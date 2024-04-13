import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MovieAdapter, MoviesAdapters } from '../../adapters';
import { IMovieDetail, IMovieDetailsSection, IProfileCast } from '../../models/movie-detail.model';
import { DatePipe, NgFor, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { CastProfileComponent } from '../../components/cast-profile/cast-profile.component';
import { StartRatingComponent } from '../../components/start-rating/start-rating.component';
import { MinutesToHoursAndMinutesPipe } from '../../adapters/pipes/minutes-to-hours-and-minutes/minutes-to-hours-and-minutes.pipe';
import { FormatGendersPipe } from '../../adapters/pipes/format-genres/format-genders.pipe';
import { FindByMovieCountryPipe } from '../../adapters/pipes/find-by-movie-country/find-by-movie-country.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    DatePipe,
    NgStyle,
    PrimaryButtonComponent,
    NgIf,
    CastProfileComponent,
    StartRatingComponent,
    MinutesToHoursAndMinutesPipe,
    FormatGendersPipe,
    FindByMovieCountryPipe,
    UpperCasePipe,
    NgFor
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  route = inject(ActivatedRoute)
  service = inject(ApiService)
  movieBackground?: string;
  movieImage?: string;
  movieDetail?: IMovieDetail
  rating?: number;
  publicClasification: string = '';
  genres?: string;
  movieDetailsDataSection?: IMovieDetailsSection[];
  profileCast: IProfileCast[] = []

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const movieById = this.service.getMovieById(param['movieId']);
      movieById.subscribe({
        next: (data) => {
          const { MoviesHandlerAdapter } = MoviesAdapters
          const { MovieHandlerAdapter } = MovieAdapter
          this.movieBackground = MoviesHandlerAdapter.formatImage(data.backdrop_path);
          this.movieImage = MoviesHandlerAdapter.formatImage(data.poster_path, 'w780');
          this.movieDetail = data;
          this.rating = MovieHandlerAdapter.formatRating(data.vote_average);
          this.publicClasification = MovieHandlerAdapter.getPublicClasification(data.releases);
          const detailsValues: Record<string, string | Date> = {
            ...MovieHandlerAdapter.findByCrew(data.casts)!,
            country: MovieHandlerAdapter.findByMovieCountry(data?.production_countries),
            original_language: data.original_language.toLocaleUpperCase(),
            release_date: data.release_date,
          }
          this.movieDetailsDataSection = Object.keys(detailsValues).map(data => ({ label: data, value: detailsValues[data] }));
          this.profileCast = MovieHandlerAdapter.formatCastProfile(data.casts).slice(0, 4);
          console.log(data, MovieHandlerAdapter.formatCastProfile(data.casts));
        },
        complete: () => {

        }
      })
    })
  }
}
