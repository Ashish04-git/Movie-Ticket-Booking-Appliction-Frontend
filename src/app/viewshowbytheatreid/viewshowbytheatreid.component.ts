import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Show } from '../Show';

@Component({
  selector: 'app-viewshowbytheatreid',
  templateUrl: './viewshowbytheatreid.component.html',
  styleUrls: ['./viewshowbytheatreid.component.css']
})
export class ViewshowbytheatreidComponent implements OnInit {

  show: Show= new Show();
  shows: Show[];
  flag: boolean=false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewShowByTheId(): void{
    this.flag=true;
    this.s.viewShowByTheId(this.show.movie.theatre.theatreId).subscribe((p)=> this.shows=p);
  }

}
