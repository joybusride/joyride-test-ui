import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Passenger } from './passenger';
import { Status } from './status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  addPassenger(passenger:Passenger):Observable<Status>{

    let url = 'http://localhost:8080/addpassenger';
    return this.http.post<Status>(url, passenger);
 

  }
}
