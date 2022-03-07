import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  constructor(private s: UserserviceService, private router: Router) { }
  msg: any;
  op: any;
  user: User= new User();

  ngOnInit(): void {
  }

  check2(): void{
      this.s.validate(this.user.userId, this.user.password).subscribe((p)=> this.op=p);
      if(this.op==true){
        localStorage.setItem('pass',this.user.password);
        this.router.navigate(['/dashboarduser']);
  
      }
      else{
        this.msg ='Invalid username or password';
        }
  
    }

}
