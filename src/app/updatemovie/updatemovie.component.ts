import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
  id: number;
  movie: Movie= new Movie();
  msg: any;
  flag: boolean= false;
  constructor(private s: MovieserviceService) { }

  ngOnInit(): void {
  }

  public viewMovieById(): void{
    this.flag=true;
    this.s.viewMovieById(this.id).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.movie=p;
        // this.msg="User Added";
        // alert(this.msg)}
      }
    });
  }

  public updateMovie(): void{
    this.s.updateMovie(this.movie).subscribe((p)=> this.movie=p);
    alert("Movie Updated");
    this.flag=false;
  }

}
