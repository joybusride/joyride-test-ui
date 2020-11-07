import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Passenger } from '../passenger';
import { PassengerService } from '../passenger.service';


@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  passenger = new Passenger();
  navigationExtras: NavigationExtras

  //variable declarations
  
  
  seats:string[];
  passengers = [];
  // numberOfSeats:number[]=[1,2,3,4];
  numberOfSeats:number=2;
  num:number[];
  numberOfPassengers: number = this.passengers.length;

  constructor(private passengerService: PassengerService, private router: Router) { }


  ngOnInit(): void {
  }


  
  addPassenger(form:NgForm){

    // console.log(form.value['passengers0']);
    for (let i = 0; i < this.numberOfSeats; i++){
      let a= "passengers"+i
      
      this.passengers.push(form.value[a])
      // console.log(form.value.a)
      
      }
      
      console.log(this.passengers)
    // this.passengers.push({ firstName: this.passenger.firstName, lastName: this.passenger.lastName, gender: this.passenger.gender, age: this.passenger.age, seat: this.passenger.seatNumber });
    console.log(this.numberOfPassengers)
    // this.showPassengers = true;
    form.resetForm();


    //sending value to seat-grid component
    this.navigationExtras={state:this.passengers};
    this.router.navigate(['/seat'],this.navigationExtras)
  }



}
//   //add passenger function
//  addPassenger(form: NgForm) {
 
    
//     // this.passengers.push({firstName:this.fName,lastName:this.lName,gender:this.gender,age:this.age});
  
//     console.log(this.passenger)
//     this.passengers.push({ firstName: this.passenger.firstName, lastName: this.passenger.lastName, gender: this.passenger.gender, age: this.passenger.age, seat: this.passenger.seatNumber });
//     this.passenger.seatNumber="J3"
//     this.passengerService.addPassenger(this.passenger).subscribe(
    
//       data => {
//         alert(JSON.stringify(data));
//         if (data.status == 'SUCCESS') {
//           //this.passengers.push({ firstName: this.passenger.firstName, lastName: this.passenger.lastName, gender: this.passenger.gender, age: this.passenger.age, seat: this.passenger.seatNumber });
//           // this.showPassengers = true;
//           console.log("Added Passenger");
//         }
//         else {
//           alert(data.status);
//         }
//       }

//     );


//     //variable that determines passenger table is displayed
//    this.showPassengers = true;
//     form.resetForm();


//   }

  // testchild($event){

  //   this.seats=$event;
  // }
