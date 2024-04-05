import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from '../data/message';

@Injectable({
  providedIn: 'root'
})
export class BackendCallsService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomerCode(code:any):Observable<message> {
    return this.http.get<message>("http://localhost:8080/getCustomerCode/" + code);
  }

  getCustomers():Observable<any> {
    return this.http.get<any>("http://localhost:8080/getCustomers");
  }
}
