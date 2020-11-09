import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Bus } from '../bus';
import { BusSearchQuery } from '../BusSearchQuery';


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  listOfBus:Bus
  navigationExtras: NavigationExtras 


  constructor(private router:Router) {
    let navigation = this.router.getCurrentNavigation();
    this.listOfBus = navigation.extras.state as Bus
    console.log("This is BUS LIST COMPONENT")  
    console.log(this.listOfBus[0].distance)
   }

  ngOnInit(): void {

  }

  bookThisBus(bus){
    console.log("Hello World!!")
    this.navigationExtras={state:bus}
    this.router.navigate(['/passenger-list'],this.navigationExtras)
    
  }  
}
