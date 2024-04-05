import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { IMovieResult, IMovies, MediaType } from '../../models/movies.model';
import { ApiService } from '../../services/api.service';
import { ListMovieComponent } from '../../components/movies/list/list.component';
import { MoviesAdapters } from '../../adapters';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    HeroComponent,
    ListMovieComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  movies?: IMovieResult;
  movieApi = inject(ApiService)
  getMovies = this.movieApi.getAllMovies();
  videoIdByYoutube: string = '';
  ngOnInit(): void {
    this.getMovies.subscribe({
      next: (data) => {
        const { MoviesHandlerAdapter } = MoviesAdapters
        const firstMovie = MoviesHandlerAdapter.getFirstMovieAdpater(data.results)
        this.movies = firstMovie;
        if (firstMovie?.id) {
          this.movieApi.getMovieByVideos(firstMovie?.id).subscribe({
            next: (data) => {
              if (data.results.length) {
                const [videoByTrailer] = data.results.filter(videos => videos.name.toLowerCase().includes('trailer'))
                this.videoIdByYoutube = videoByTrailer.key
              }
            },
            error: (error) => {
              console.log(error);
            }
          })
        }
      }
    })
  }

}

