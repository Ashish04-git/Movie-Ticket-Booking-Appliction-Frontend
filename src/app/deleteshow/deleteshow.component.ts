import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Show } from '../Show';

@Component({
  selector: 'app-deleteshow',
  templateUrl: './deleteshow.component.html',
  styleUrls: ['./deleteshow.component.css']
})
export class DeleteshowComponent implements OnInit {

  show: Show= new Show();
  id:number;
  msg: any;
  flag: boolean=false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewShowById(): void{
    this.flag=true;
    this.s.viewShowById(this.id).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.show=p;
      }
    });
  }

  public deleteShow(): void{
    this.s.deleteShow(this.show.showId).subscribe((p)=>this.show=p);
    alert("Show Deleted");
    this.flag=false;
  }

}
