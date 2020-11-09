import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from 'rxjs';
import { Status } from "./status";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user:User):Observable<Status>{
    let url='http://localhost:8080/register';
    return this.http.post<Status>(url,user);
  }

  fetchProfile(email: string) : Observable<User> {
    let url='http://localhost:8080/profile?email='+email;
    return this.http.get<User>(url);
  }
}