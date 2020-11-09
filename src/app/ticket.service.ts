import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  viewTicketDetails():Observable<Ticket>{

    let url="http://localhost:8787/enableticket";
    return this.http.get<Ticket>(url);
  }
}
