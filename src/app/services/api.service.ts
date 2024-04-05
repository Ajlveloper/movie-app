import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from '../models/movies.model';
import { IMoviesByVideos } from '../models/movie-videos.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.api
  httpClient = inject(HttpClient);

  getAllMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this.baseUrl}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`, {
      headers: {
        Authorization: `Bearer ${environment.apiToken}`
      }
    })
  }

  getMovieByVideos(movieId: number): Observable<IMoviesByVideos> {
    return this.httpClient.get<IMoviesByVideos>(`${this.baseUrl}/movie/${movieId}/videos?language=en-US`, {
      headers: {
        Authorization: `Bearer ${environment.apiToken}`
      }
    })
  }
}
