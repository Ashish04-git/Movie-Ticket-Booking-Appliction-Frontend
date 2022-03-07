import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { ProjectUrl } from './ProjectUrl';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  
  url: string= ProjectUrl.getUrl();
  constructor(private h: HttpClient) { }

  public viewCust(): Observable<any>{
    return this.h.get<any>(this.url+"cust/list");
  }
  
  public addCust(cust: Customer): Observable<any>{
    return this.h.post(this.url+"cust/add", cust, {responseType: 'text'});
  }

  public getCustById(id: number): Observable<any>{
    return this.h.get<any>(this.url+"cust/custby/"+id);
  }

  public updateCust(cust: Customer): Observable<any>{
    return this.h.put(this.url+"cust/update", cust, {responseType: 'text'});
  }

  public deleteCust(id: number): Observable<any>{
    return this.h.delete(this.url+"cust/delete/"+id);
  }

  public getCustByMovieId(id: number): Observable<any>{
    return this.h.get<any>(this.url+"cust/custmovieid/"+id);
  }

}
