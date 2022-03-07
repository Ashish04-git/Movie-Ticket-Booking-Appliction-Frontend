import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-viewbookingbydate',
  templateUrl: './viewbookingbydate.component.html',
  styleUrls: ['./viewbookingbydate.component.css']
})
export class ViewbookingbydateComponent implements OnInit {

  booking: TicketBooking= new TicketBooking();
  bookings: TicketBooking[];
  msg: any;
  flag: boolean=false;
  constructor(private s: BookingserviceService) { }

  ngOnInit(): void {
  }

  public viewBookingByDate(): void{
    this.flag=true;
    this.s.viewBookingByDate(this.booking.bookingDate).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
      this.flag=false;}
      else {
        this.bookings=p;
      }
    });
  }

}
