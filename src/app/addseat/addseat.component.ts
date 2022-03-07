import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-addseat',
  templateUrl: './addseat.component.html',
  styleUrls: ['./addseat.component.css']
})
export class AddseatComponent implements OnInit {

  seat: Seat= new Seat();
  constructor(private s: MovieserviceService) { }
  msg:any;
  ngOnInit(): void {
  }

  public addSeat(): void{
    this.s.addSeat(this.seat).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);}
      else {
        this.seat=p;
        this.msg= "Seat Added";
        alert(this.msg)}
    });
  }

}
