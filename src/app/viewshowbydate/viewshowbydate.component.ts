import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Show } from '../Show';

@Component({
  selector: 'app-viewshowbydate',
  templateUrl: './viewshowbydate.component.html',
  styleUrls: ['./viewshowbydate.component.css']
})
export class ViewshowbydateComponent implements OnInit {

  show: Show= new Show();
  shows: Show[];
  flag: boolean= false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewShowByDate(): void{
    this.flag=true;
    this.s.viewShowByDate(this.show.showStartTime).subscribe((p)=> this.shows=p);
  }

}
