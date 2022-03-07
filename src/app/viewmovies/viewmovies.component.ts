import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-viewmovies',
  templateUrl: './viewmovies.component.html',
  styleUrls: ['./viewmovies.component.css']
})
export class ViewmoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private s: MovieserviceService) { 
    this.s.viewMovies().subscribe((p)=> this.movies=p);
  }

  ngOnInit(): void {
  }

}
