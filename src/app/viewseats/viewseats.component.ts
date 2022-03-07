import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Seat } from '../Seat';

@Component({
  selector: 'app-viewseats',
  templateUrl: './viewseats.component.html',
  styleUrls: ['./viewseats.component.css']
})
export class ViewseatsComponent implements OnInit {

  seats: Seat[];
  constructor(private s: MovieserviceService) { 
    this.s.viewSeats().subscribe((p)=> this.seats=p);
  }

  ngOnInit(): void {
  }

}
