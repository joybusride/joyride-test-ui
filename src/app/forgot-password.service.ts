import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from './status';
import { ForgotPassword } from "./forgot-password";


@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }

  forgotPassword(forgotPassword: ForgotPassword) : Observable<Status>  {
    let url = 'http://localhost:8080/forgotPassword';
    return this.http.post<Status>(url, forgotPassword);
  }

}
