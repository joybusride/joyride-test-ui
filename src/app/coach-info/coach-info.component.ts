import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BusCoach } from '../buscoach';

@Component({
  selector: 'app-coach-info',
  templateUrl: './coach-info.component.html',
  styleUrls: ['./coach-info.component.css']
})
export class CoachInfoComponent implements OnInit {
  state
  navigationExtras: NavigationExtras 


  constructor(private router:Router) {
    let navigation = this.router.getCurrentNavigation();
    this.state = navigation.extras.state as BusCoach
    console.log(this.state)
    this.state.noOfSeats=30
    console.log(this.state)

   }

  ngOnInit(): void {
  }


  test(){
    
  }
}
