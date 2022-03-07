import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  constructor(private s: UserserviceService, private routes: Router) { }
  msg: any;
  op: any;
  user: User= new User();
  ngOnInit(): void {
  }

  check(): void{
    this.s.validate(this.user.userId, this.user.password).subscribe((p)=> this.op=p);
    if(this.op==true){
      localStorage.setItem('password',this.user.password);
      this.routes.navigate(['/login']);

    }
    else{
      this.msg ='Invalid username or password';
      }

  }

}
