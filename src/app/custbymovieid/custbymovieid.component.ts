import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-custbymovieid',
  templateUrl: './custbymovieid.component.html',
  styleUrls: ['./custbymovieid.component.css']
})
export class CustbymovieidComponent implements OnInit {
  customers: Customer[];
  cust: Customer= new Customer();
  msg: any;
  flag: boolean=false;
  constructor(private s: CustomerserviceService) { }

  ngOnInit(): void {
  }

  public getCustByMovieId(): void{
    this.flag=true;
    this.s.getCustByMovieId(this.cust.movie.movieId).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
         this.flag=false;}
      else {
        this.customers=p;
        // this.msg="Customer Added";
        // alert(this.msg)}
      }
    });
  }

}
