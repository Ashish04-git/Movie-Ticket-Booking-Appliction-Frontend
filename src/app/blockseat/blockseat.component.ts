import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-blockseat',
  templateUrl: './blockseat.component.html',
  styleUrls: ['./blockseat.component.css']
})
export class BlockseatComponent implements OnInit {
  seat: Seat= new Seat();
  msg: any;
  flag: boolean=false;
  seats: Seat[];
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public blockseat(): void{
    this.flag=true;
    this.s.blockSeat(this.seat.seatId).subscribe((p)=>{
      if(p['message']!= undefined){
        this.msg= p['message'];
        alert(this.msg)
      }else{
        this.seats=p;
      }
    })
  }

}
