import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Show } from '../Show';

@Component({
  selector: 'app-updateshow',
  templateUrl: './updateshow.component.html',
  styleUrls: ['./updateshow.component.css']
})
export class UpdateshowComponent implements OnInit {

  show: Show= new Show();
  id: number;
  msg: any;
  flag: boolean= false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewShowById(): void{
    this.flag=true;
    this.s.viewShowById(this.id).subscribe((p)=>{
      if(p['message']!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.show=p;
      }
    });
  }

  public updateShow(): void{
   
    this.s.updateShow(this.show).subscribe((p)=>this.show=p);
    alert("Show Updated Successfully");
    this.flag=false;
  }

}
