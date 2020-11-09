import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Bus } from '../bus';
import { BusSearchQuery } from '../BusSearchQuery';
import { SearchBusService } from '../search-bus.service';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  busQuery:BusSearchQuery
  listOfBus:Bus
  navigationExtras: NavigationExtras 
  
  constructor(private router: Router,private searchBus:SearchBusService) {
    this.busQuery=new BusSearchQuery()

   }

  ngOnInit(): void {
  }

  busList(){
    console.log(this.busQuery)
    this.searchBus.searchBus(this.busQuery).subscribe(res=>
         {
          this.listOfBus=res
          this.navigationExtras={state:this.listOfBus}
          this.router.navigate(['/bus-list'],this.navigationExtras)
          }
        )
  
  }

}
