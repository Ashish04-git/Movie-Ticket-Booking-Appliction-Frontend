import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Show } from '../Show';

@Component({
  selector: 'app-viewshows',
  templateUrl: './viewshows.component.html',
  styleUrls: ['./viewshows.component.css']
})
export class ViewshowsComponent implements OnInit {

  shows: Show[];
  constructor(private s: MovieserviceService) {
    this.s.viewShows().subscribe((p)=>this.shows=p);
   }

  ngOnInit(): void {
  }

}
