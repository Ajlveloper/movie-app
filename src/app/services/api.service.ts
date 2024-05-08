import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from '../models/movies.model';
import { IMoviesByVideos } from '../models/movie-videos.model';
import { IMovieDetail } from '../models/movie-detail.model';

const REQUEST_OPTINOS = {
  headers: {
    Authorization: `Bearer ${environment.apiToken}`
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.api
  httpClient = inject(HttpClient);


  getAllMovies(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${this.baseUrl}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`, REQUEST_OPTINOS)
  }

  getMovieByVideos(movieId: number): Observable<IMoviesByVideos> {
    return this.httpClient.get<IMoviesByVideos>(`${this.baseUrl}/movie/${movieId}/videos?language=en-US`, REQUEST_OPTINOS)
  }

  getMovieById(movieId: number): Observable<IMovieDetail> {
    return this.httpClient.get<IMovieDetail>(`${this.baseUrl}/movie/${movieId}?language=en-US&append_to_response=casts,videos,images,releases`, REQUEST_OPTINOS)
  }
}
