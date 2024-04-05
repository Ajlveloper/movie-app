import { Component, OnInit, inject } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ApiService } from '../../../services/api.service';
import { MoviesAdapters } from '../../../adapters';
import { IMovieAllAdapter } from '../../../models/movies.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListMovieComponent implements OnInit {
  movieApi = inject(ApiService);
  getMovies = this.movieApi.getAllMovies();
  movies?: IMovieAllAdapter[];

  ngOnInit(): void {
    this.getMovies.subscribe({
      next: (data) => {
        const { MoviesHandlerAdapter } = MoviesAdapters
        this.movies = MoviesHandlerAdapter.getMoviesAllAdapter(data.results);
      }
    })
  }
}
