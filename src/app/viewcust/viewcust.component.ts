import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-viewcust',
  templateUrl: './viewcust.component.html',
  styleUrls: ['./viewcust.component.css']
})
export class ViewcustComponent implements OnInit {

  customers: Customer[];
  constructor(private s: CustomerserviceService) {
    this.s.viewCust().subscribe((p)=> this.customers=p);
   }

  ngOnInit(): void {
  }


}
