import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from '../bookingservice.service';
import { TicketBooking } from '../TicketBooking';

@Component({
  selector: 'app-viewbookingcost',
  templateUrl: './viewbookingcost.component.html',
  styleUrls: ['./viewbookingcost.component.css']
})
export class ViewbookingcostComponent implements OnInit {

  booking: TicketBooking= new TicketBooking();
  flag: boolean= false;
  msg: any;
  constructor(private s: BookingserviceService) { }

  ngOnInit(): void {
  }

  public getBookingByCost(): void{
    this.flag=true;
    this.s.getBookingCost(this.booking.transactionId).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
      this.flag=false;}
      else {
        this.booking.totalCost=p;
      }
    });
  }

}
