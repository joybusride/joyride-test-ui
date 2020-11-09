import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Bus } from './bus';
import { BusSearchQuery } from './BusSearchQuery';

@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  constructor(private httpClient:HttpClient) { }


  searchBus(busQuery:BusSearchQuery):Observable<Bus>{
    let url="http://localhost:8585/search-bus-list"
    return  this.httpClient.post<Bus>(url,busQuery)
  }


      
}
