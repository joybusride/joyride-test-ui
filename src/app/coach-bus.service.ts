import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusCoach } from './buscoach';

@Injectable({
  providedIn: 'root'
})
export class CoachBusService {

  constructor(private httpClient:HttpClient) { }





  listAllBus():Observable<any>{
    return this.httpClient.get("http://localhost:8686/rest/api/coach-list")
  }


}
