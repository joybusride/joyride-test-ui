import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from "./change-password";
import { Observable } from 'rxjs';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http:HttpClient) { }

  
  changePassword(changePassword: ChangePassword) : Observable<Status>  {
    let url = 'http://localhost:8080/forgotPassword';
    return this.http.post<Status>(url, changePassword);
  }
}
