import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewuserbyid',
  templateUrl: './viewuserbyid.component.html',
  styleUrls: ['./viewuserbyid.component.css']
})
export class ViewuserbyidComponent implements OnInit {
  user: User= new User();
  msg: any;
  public flag:boolean=false;
  constructor(private s: UserserviceService) {

   }

  ngOnInit(): void {
  }

  public viewUserById(): void{
    this.flag=true;
    this.s.viewUserById(this.user.userId).subscribe((p)=> {
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);
        this.flag=false;}
      else {
        this.user=p;}
    });
    
  }
  

}
