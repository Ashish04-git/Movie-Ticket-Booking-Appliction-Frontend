import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user: User= new User();
  flag: boolean= false;
  constructor(private s: UserserviceService) { }
  msg: any;
  ngOnInit(): void {
  }

  public addUser(): void{

    this.s.addUser(this.user).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
      this.flag=false;}
      else {
        this.user=p;
        this.msg="User Added";
        alert(this.msg)}
    });
   
  }

}
