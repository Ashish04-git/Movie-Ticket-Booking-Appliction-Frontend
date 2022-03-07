import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-viewmoviebytheatreid',
  templateUrl: './viewmoviebytheatreid.component.html',
  styleUrls: ['./viewmoviebytheatreid.component.css']
})
export class ViewmoviebytheatreidComponent implements OnInit {

  movie: Movie= new Movie();
  msg: any;
  movies: Movie[];
  flag: boolean=false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewMovieByTheatreId(): void{
    this.flag=true;
    this.s.viewMovieByTheatreId(this.movie.theatre.theatreId).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.movies=p;
      }
    });
  }

}
