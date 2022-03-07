import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-custbyid',
  templateUrl: './custbyid.component.html',
  styleUrls: ['./custbyid.component.css']
})
export class CustbyidComponent implements OnInit {

  cust: Customer=new Customer();
  flag: boolean= false;
  msg: any;
  constructor(private s: CustomerserviceService) { }

  ngOnInit(): void {
  }

  public getCustById(): void{
    this.flag=true; 
    this.s.getCustById(this.cust.customerId).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.cust=p;
        // this.msg="Customer Added";
        // alert(this.msg)}
      }
    });
  }

}
