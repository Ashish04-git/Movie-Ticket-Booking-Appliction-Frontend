import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieserviceService } from '../movieservice.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-deleteseat',
  templateUrl: './deleteseat.component.html',
  styleUrls: ['./deleteseat.component.css']
})
export class DeleteseatComponent implements OnInit {

  id: number;
  seat: Seat= new Seat();
  flag: boolean=false;
  msg: any;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public getSeatById(): void{
    this.flag=true;
    this.s.getSeatById(this.id).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);}
      else{ 
        this.seat=p;
      }
    });
    
  }

  public deleteSeat(): void{
    this.s.deleteSeat(this.seat.seatId).subscribe((p)=> this.seat=p);
    alert("Seat deleted");
    this.flag=false;
    
  }

}
