import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { ProjectUrl } from './ProjectUrl';
import { Seat } from './Seat';
import { Show } from './Show';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
url: string= ProjectUrl.getUrl();
  constructor(private h: HttpClient) { }

  public viewShows(): Observable<any>{
    return this.h.get<any>(this.url+"show/list");
  }

  public addShow(show: Show): Observable<any>{
    return this.h.post(this.url+"show/add", show, {responseType: 'text'});
  }

  public viewShowByTheId(id: number): Observable<any>{
    return this.h.get<any>(this.url+"show/showtheid/"+id);
  }

  public viewShowByDate(date: Date): Observable<any>{
    return this.h.get<any>(this.url+"show/showdate/"+date);
  }

  public updateShow(show: Show): Observable<any>{
    return this.h.put(this.url+"show/update", show, {responseType: 'text'});
  }

  public viewShowById(id: number): Observable<any>{
    return this.h.get<any>(this.url+"show/showbyid/"+id);
  }

  
  public deleteShow(id: number): Observable<any>{
    return this.h.delete(this.url+"show/delete/"+id);
  }

  public viewMovies(): Observable<any>{
    return this.h.get<any>(this.url+"movie/list");
  }

  public addMovie(movie: Movie): Observable<any>{
    return this.h.post(this.url+"movie/add", movie, {responseType: 'text'});
  }

  public viewMovieById(id: number): Observable<any>{
    return this.h.get<any>(this.url+"movie/movieby/"+id);
  }

  public viewMovieByTheatreId(id: number): Observable<any>{
    return this.h.get<any>(this.url+"movie/movietheid/"+id);
  }

  public updateMovie(movie: Movie): Observable<any>{
    return this.h.put(this.url+"movie/update",movie);
  }

  public deleteMovie(id: number): Observable<any>{
    return this.h.delete(this.url+"movie/delete/"+id);
  }

  public viewSeats(): Observable<any>{
    return this.h.get<any>(this.url+"seat/list");
  }

  public addSeat(seat: Seat): Observable<any>{
    return this.h.post(this.url+"seat/bookseat",seat);
  }

  public deleteSeat(id: number): Observable<any>{
    return this.h.delete(this.url+"seat/cancelseat/"+id);
  }

  public getSeatById(id: number): Observable<any>{
    return this.h.get<any>(this.url+"seat/seatbyid/"+id);
  }

  public blockSeat(id: number): Observable<any>{
    return this.h.get<any>(this.url+"seat/blockseat/"+id);
  }
}



