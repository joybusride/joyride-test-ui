import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  busList(){
    console.log("Hello")
    this.router.navigate(['/bus-list'])
  }

}
