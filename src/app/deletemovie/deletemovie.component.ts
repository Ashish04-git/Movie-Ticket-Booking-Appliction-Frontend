import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

  movie: Movie= new Movie();
  id: number;
  flag: boolean=false;
  msg: any;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewMovieById(): void{
    this.flag=true;
    this.s.viewMovieById(this.id).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;} 
      else {
        this.movie=p;
        // this.msg="Movie Deleted";
        // alert(this.msg)}
      }
    });
  }

  public deleteMovie(): void{
    this.s.deleteMovie(this.movie.movieId).subscribe((p)=> this.movie=p);
    alert("Movie Deleted");
  }


}
