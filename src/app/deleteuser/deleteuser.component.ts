import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  user: User= new User();
  constructor(private s: UserserviceService) { }
  msg: any;
  ngOnInit(): void {
  }

  public deleteUser(): void{
    this.s.deleteUser(this.user.userId).subscribe((p)=>{
      if(p["message"]!= undefined){
        this.msg= p["message"];
        alert(this.msg);}
      else {
        this.user=p;
        alert("User Deleted");}
    });;
    
  }

}
