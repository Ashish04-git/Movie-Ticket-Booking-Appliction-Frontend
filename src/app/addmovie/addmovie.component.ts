import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  movie: Movie= new Movie();
  msg: any;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public addMovie(): void{
    this.s.addMovie(this.movie).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
      }
      else {
        this.movie=p;
        this.msg="Movie Added";
        alert(this.msg)}
    });
  }

}
