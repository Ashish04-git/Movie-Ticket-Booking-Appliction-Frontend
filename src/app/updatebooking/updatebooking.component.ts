import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-updatebooking',
  templateUrl: './updatebooking.component.html',
  styleUrls: ['./updatebooking.component.css']
})
export class UpdatebookingComponent implements OnInit {

  
  constructor(private s: BookingserviceService) { }

  booking: TicketBooking= new TicketBooking();
  id: number;
  flag: boolean=false;
  msg: any;
  ngOnInit(): void {
  }

  public viewBookingById(): void{
    this.flag=true;
    this.s.getBookingById(this.id).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
        else {
          this.booking=p;
        }

    });
  }

    public updateBooking(): void{
      this.s.updateBooking(this.booking).subscribe((p)=> this.booking=p);
      alert("Booking updated");
    }
  

}
