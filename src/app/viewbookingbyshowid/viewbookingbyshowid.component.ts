import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-viewbookingbyshowid',
  templateUrl: './viewbookingbyshowid.component.html',
  styleUrls: ['./viewbookingbyshowid.component.css']
})
export class ViewbookingbyshowidComponent implements OnInit {

  booking: TicketBooking= new TicketBooking();
  bookings: TicketBooking[];
  msg: any;
  flag: boolean=false;
  constructor(private s: BookingserviceService) { }

  ngOnInit(): void {
  }

  public viewBookingByShowId(): void{
    this.flag=true;
    this.s.viewBookingByShowId(this.booking.showId.showId).subscribe((p)=>{
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
