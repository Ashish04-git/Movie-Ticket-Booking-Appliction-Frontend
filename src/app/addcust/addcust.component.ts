import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-addcust',
  templateUrl: './addcust.component.html',
  styleUrls: ['./addcust.component.css']
})
export class AddcustComponent implements OnInit {
  cust: Customer= new Customer;
  constructor(private s: CustomerserviceService) { }
  msg: any;
  ngOnInit(): void {
  }

  public addCust(): void{
    this.s.addCust(this.cust).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);}
      else {
        this.cust=p;
        alert("Customer Added");
      }
    });
  }

}
