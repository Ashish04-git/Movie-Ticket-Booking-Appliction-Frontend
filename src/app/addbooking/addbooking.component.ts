import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent implements OnInit {

  booking: TicketBooking= new TicketBooking();
  msg: any;
  constructor(private s: BookingserviceService) { }

  ngOnInit(): void {
  }

  public addBooking(): void{
    this.s.addBooking(this.booking).subscribe((p)=>{
      if(p['message']!=undefined){
        this.msg= p['message'];
        alert(this.msg)
      
      }
      else{
        this.booking=p;
        alert("Booking Added");
      }
    });
  }

}
