import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectUrl } from './ProjectUrl';
import { TicketBooking } from './TicketBooking';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  url: string= ProjectUrl.getUrl();
  constructor(private h: HttpClient) { }

  public viewBookings(): Observable<any>{
    return this.h.get<any>(this.url + "booking/list");
  }

  public viewBookingByMovieId(id: number):Observable<any>{
    return this.h.get<any>(this.url+"booking/bookmovieid/"+id);
  }

  public viewBookingByShowId(id: number): Observable<any>{
    return this.h.get<any>(this.url+"booking/bookshowid/"+id);
  }

  public viewBookingByDate(date: Date): Observable<any>{
    return this.h.get<any>(this.url+"booking/bookdate/"+date);
  }

  public getBookingById(id: number): Observable<any>{
    return this.h.get<any>(this.url+"booking/bookbyid/"+id);
  }

  public updateBooking(booking: TicketBooking): Observable<any>{
    return this.h.put(this.url+"booking/update", booking);
  }

  public addBooking(booking: TicketBooking): Observable<any>{
    return this.h.post(this.url+"booking/add", booking);
  }

  public deleteBooking(id: number): Observable<any>{
    return this.h.delete(this.url+"booking/delete/"+id);
  }

  public getBookingCost(id: number): Observable<any>{
    return this.h.get<any>(this.url+"booking/bookcost/"+id);
  }


  
  



}
