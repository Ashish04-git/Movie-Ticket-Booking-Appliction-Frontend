import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {

  bookings: TicketBooking[];
  constructor(private s: BookingserviceService) {
    this.s.viewBookings().subscribe((p)=>this.bookings=p);
   }

  ngOnInit(): void {
  }

}
