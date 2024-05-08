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
import { OutlineButtonComponent } from '../../components/buttons/outline-button/outline-button.component';
import { MatDialog } from '@angular/material/dialog';
import { CastModalComponent } from '../../components/modal/cast-modal/cast-modal.component';
import { ModalService } from '../../services/modal/modal.service';

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
    NgFor,
    OutlineButtonComponent,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  route = inject(ActivatedRoute)
  service = inject(ApiService)
  dialog = inject(MatDialog);
  modalService = inject(ModalService)
  movieBackground?: string;
  movieImage?: string;
  movieDetail?: IMovieDetail
  rating?: number;
  publicClasification: string = '';
  genres?: string;
  movieDetailsDataSection?: IMovieDetailsSection[];
  profileCast: IProfileCast[] = []
  videoId: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const movieById = this.service.getMovieById(param['movieId']);
      movieById.subscribe({
        next: (data) => {
          const { MoviesHandlerAdapter } = MoviesAdapters
          const { MovieHandlerAdapter } = MovieAdapter
          this.movieBackground = MoviesHandlerAdapter.formatImage(data.backdrop_path);
          this.movieImage = MoviesHandlerAdapter.formatImage(data.poster_path, 'w780');
          this.videoId = data.videos.results.find(video => video.key)?.key || '';
          this.movieDetail = data;
          this.rating = MovieHandlerAdapter.formatRating(data.vote_average);
          this.publicClasification = MovieHandlerAdapter.getPublicClasification(data.releases);
          const detailsValues: Record<string, { label: string, value: string | Date }> = {
            ...MovieHandlerAdapter.findByCrew(data.casts)!,
            country: {
              value: MovieHandlerAdapter.findByMovieCountry(data?.production_countries),
              label: 'Country',
            },
            original_language: {
              value: data.original_language.toLocaleUpperCase(),
              label: 'Language',
            },
            release_date: {
              value: data.release_date,
              label: 'Release Date'
            },
          }
          this.movieDetailsDataSection = Object.keys(detailsValues).map(data => ({ label: detailsValues[data].label, value: detailsValues[data].value }));
          this.profileCast = MovieHandlerAdapter.formatCastProfile(data.casts);
        },
        complete: () => {

        }
      })
    })
  }

  showCastModal() {
    this.dialog.open(CastModalComponent, {
      width: '600px',
      height: '600px',
      maxHeight: '600px',
      panelClass: 'cast-modal',
      data: {
        profileCast: this.profileCast,
        text: 'Cast'
      }
    })
  }

  hadleOpenModal() {
    this.modalService.handleShowModal(this.videoId);
  }
}
