import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    //variable declarations
    fName;
    lName;
    gender="Male";
    age;
    showPassengers=false;
    passengers=[];
  numberOfPassengers:number= this.passengers.length;


  //add passenger function
  addPassenger(form: NgForm){
    
    /*
    console.log(this.fName);
    console.log(this.gender);
    console.log(this.age);*/
    this.passengers.push({firstName:this.fName,lastName:this.lName,gender:this.gender,age:this.age});
   /* console.log(this.passengers);
    console.log(this.numberOfPassengers);*/

    //variable that determines passenger table is displayed
    this.showPassengers=true;
    form.resetForm();
    

  }
  bookSeats(){

    

  }


}
