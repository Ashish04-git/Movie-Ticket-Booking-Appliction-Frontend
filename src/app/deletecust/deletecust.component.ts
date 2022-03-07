import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-deletecust',
  templateUrl: './deletecust.component.html',
  styleUrls: ['./deletecust.component.css']
})
export class DeletecustComponent implements OnInit {

  id:number;
  cust: Customer= new Customer();
  flag : boolean=false;
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
      }
    });
  }

  public deleteCust(): void{
    this.s.deleteCust(this.cust.customerId).subscribe((p)=> this.cust=p);
    alert("Customer Deleted");
    this.flag=false;
  }

}
