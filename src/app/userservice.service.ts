import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as internal from 'stream';
import { ProjectUrl } from './ProjectUrl';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  url: string= ProjectUrl.getUrl();
  constructor(private h: HttpClient) { }

  public viewUser(): Observable<any>{
    return this.h.get<any>(this.url+"user/userlist");
  }

  public addUser(user:User): Observable<any>{
    return this.h.post(this.url+"user/adduser", user);
  }

  public deleteUser(id: number): Observable<any>{
    return this.h.delete(this.url+"user/deluser/"+id);  
  }

  public viewUserById(id:number): Observable<any>{
    return this.h.get<any>(this.url+"user/userby/"+id)  
  }

  public validate(userid: number, pass: string): Observable<boolean>{
    return this.h.get<boolean>(this.url +"user/validate/"+userid+"/"+pass);
  }

  public validateAdmin(adminid: number, pass: string): Observable<any>{
    return this.h.get<any>(this.url+"user/validateadmin/"+adminid+"/"+pass);
  }
}
