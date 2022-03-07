import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-deletebooking',
  templateUrl: './deletebooking.component.html',
  styleUrls: ['./deletebooking.component.css']
})
export class DeletebookingComponent implements OnInit {

  booking: TicketBooking=new TicketBooking();
  id: number;
  flag: boolean=false;
  msg: any;
  constructor(private s: BookingserviceService) { }

  ngOnInit(): void {
  }

  public viewBookingById(): void{
    this.flag=true;
    this.s.getBookingById(this.id).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;} 
      else {
        this.booking=p;}
    });
  }

  public deleteBooking(): void{
    this.s.deleteBooking(this.booking.transactionId).subscribe((p)=> this.booking=p);
    alert("Booking Delete");
  }





}
