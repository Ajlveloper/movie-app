import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MoviesAdapters } from '../../adapters';
import { IMovieDetail } from '../../models/movie-detail.model';
import { DatePipe, NgStyle } from '@angular/common';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    DatePipe,
    NgStyle,
    PrimaryButtonComponent,
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
  
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param['movieId'])
      const movieById = this.service.getMovieById(param['movieId']);
      movieById.subscribe({
        next: (data) => {
          const { MoviesHandlerAdapter } = MoviesAdapters
          this.movieBackground = MoviesHandlerAdapter.formatImage(data.backdrop_path);
          this.movieImage = MoviesHandlerAdapter.formatImage(data.poster_path, 'w780')
          this.movieDetail = data
        },
        complete: () => {

        }
      })
    })
  }
}
