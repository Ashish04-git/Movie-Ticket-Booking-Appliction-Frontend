import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  users: User[];
  constructor(private s: UserserviceService) {
    this.s.viewUser().subscribe((p)=>this.users=p);
   }

  ngOnInit(): void {
  }

}
