import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';

import { Bus } from '../bus';
import { BusBookingDetail } from '../bus-booking-detail';


@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  passenger = new Passenger();
  navigationExtras: NavigationExtras
  bus
  //variable declarations
  seats:string[];
  passengers = [];
  // numberOfSeats:number[]=[1,2,3,4];
  numberOfSeats:number=2;
  num:number[];
  numberOfPassengers: number = this.passengers.length;
  bookingDetail=new BusBookingDetail()
  
  constructor(private passengerService: PassengerService,private router:Router) { 

    let navigation = this.router.getCurrentNavigation();
    this.bus = navigation.extras.state as Bus
    console.log("This is Add Passenger COMPONENT")  
    console.log(this.bus)
    this.bookingDetail.bus=this.bus
  }


  ngOnInit(): void {
  }


  
  addPassenger(form:NgForm){

    // console.log(form.value['passengers0']);
    for (let i = 0; i < this.numberOfSeats; i++){
      let a= "passengers"+i
      form.value[a].busId=this.bus.busId
      this.passengers.push(form.value[a])
      // console.log(form.value.a)
      
      }
      
      console.log(this.passengers)
    // this.passengers.push({ firstName: this.passenger.firstName, lastName: this.passenger.lastName, gender: this.passenger.gender, age: this.passenger.age, seat: this.passenger.seatNumber });
    console.log(this.numberOfPassengers)
    // this.showPassengers = true;
    form.resetForm();

    this.bookingDetail.passengerList=this.passengers
    this.bookingDetail.amount=this.passengers.length*this.bus.fare
    //sending value to seat-grid component
    this.navigationExtras={state:this.bookingDetail};
    this.router.navigate(['/seat'],this.navigationExtras)
  }



}
