import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Show } from '../Show';

@Component({
  selector: 'app-addshow',
  templateUrl: './addshow.component.html',
  styleUrls: ['./addshow.component.css']
})
export class AddshowComponent implements OnInit {

  show: Show= new Show();
  msg: any;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public addShow(): void{
    this.s.addShow(this.show).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);}
      else {
        this.show=p;
        alert("Show Added");}
    });
  }

}
