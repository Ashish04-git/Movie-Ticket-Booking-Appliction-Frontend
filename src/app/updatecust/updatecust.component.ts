import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-updatecust',
  templateUrl: './updatecust.component.html',
  styleUrls: ['./updatecust.component.css']
})
export class UpdatecustComponent implements OnInit {

  cust: Customer= new Customer();
  flag: boolean= false;
  id: number;
  msg: any;
  constructor(private s: CustomerserviceService) { }

  ngOnInit(): void {
  }

  public getCustById(): void{
    this.flag=true;
    this.s.getCustById(this.id).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.cust=p;
        // this.msg="Customer Updated";
        // alert(this.msg)}
      }
    });
  }
  public updateCust(): void{
    this.s.updateCust(this.cust).subscribe((p)=> this.cust=p);
    alert("Customer Updated");
  }

}
