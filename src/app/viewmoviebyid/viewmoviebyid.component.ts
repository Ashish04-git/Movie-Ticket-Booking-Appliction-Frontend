import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-viewmoviebyid',
  templateUrl: './viewmoviebyid.component.html',
  styleUrls: ['./viewmoviebyid.component.css']
})
export class ViewmoviebyidComponent implements OnInit {
  movie: Movie= new Movie();
  msg: any;
  flag: boolean= false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewMovieById(): void{
    this.flag=true;
    this.s.viewMovieById(this.movie.movieId).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
      this.flag=false;}
      else {
        this.movie=p;
      }
    });
  }



}
