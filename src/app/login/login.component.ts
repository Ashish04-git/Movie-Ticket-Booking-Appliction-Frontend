import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private s: UserserviceService, private router: Router) { }
  msg: any;
  op: any;
  user: User= new User();
  admin: Admin= new Admin();
  ngOnInit(): void {
  }

  check(): void{
  //   this.s.validate(this.user.userId, this.user.password).subscribe((p)=> this.op=p);
  //   if(this.op==true){
  //     localStorage.setItem('password',this.user.password);
  //     this.router.navigate(['/dashboard']);

  //   }
  //   else{
  //     this.msg ='Invalid username or password';
  //     }

  // }

  this.s.validateAdmin(this.admin.adminId, this.admin.password).subscribe((p)=> this.op=p);
  if(this.op==true){
    localStorage.setItem('password', this.admin.password);
    this.router.navigate(['/dashboard'])
  }
  else{
    this.msg="Invalid ID or Password";
  }
  }

}
