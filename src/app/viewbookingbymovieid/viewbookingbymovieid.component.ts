import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-viewbookingbymovieid',
  templateUrl: './viewbookingbymovieid.component.html',
  styleUrls: ['./viewbookingbymovieid.component.css']
})
export class ViewbookingbymovieidComponent implements OnInit {

  bookings: TicketBooking[];
  booking: TicketBooking= new TicketBooking();
  msg: any;
  flag: boolean=false;
  constructor(private s: BookingserviceService) { }

  ngOnInit(): void {
  }

  public viewBookingByMovieId(): void{
    this.flag=true;
    this.s.viewBookingByMovieId(this.booking.customer.movie.movieId).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
      this.flag= false;}
      else {
        this.bookings=p;
      }
    });
  }



}
