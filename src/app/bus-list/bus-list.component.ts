import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusDetails } from './Details';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.newDetail("BMTC","8:00 am","6:00 am","Madurai","Jammu",50,"Rs 500","70 km"));

  }


  busdetails:BusDetails[]=[{BusName:"Vayuraj", DepartureTime:"8:00 am", ArrivalTime:"6:00 am",From:"Mumbai",To:"Delhi", Seats:50,Fare:"Rs 500",Distance:"70 km"},{BusName:"SRS Travels", DepartureTime:"11:00 am", ArrivalTime:"9:00 am",From:"Mumbai",To:"Delhi", Seats:60,Fare:"Rs 550",Distance:"75 km"},{BusName:"Hans Travels", DepartureTime:"2:00 pm", ArrivalTime:"12:00 pm",From:"Mumbai",To:"Delhi", Seats:80,Fare:"Rs 530",Distance:"73 km"}];
  
  adddetails=false;


  busdetail= new BusDetails("BMTC","8:00 am","6:00 am","Madurai","Jammu",50,"Rs 500","70 km");

 

  newDetail(busname1:string,departuretime1:string,arrivaltime1:string,from1:string,to1:string,seats1:number,fare1:string,distance1:string)
  {
    this.busdetails.push({BusName:busname1,DepartureTime:departuretime1,ArrivalTime:arrivaltime1,From:from1,To:to1,Seats:seats1,Fare:fare1,Distance:distance1});
    this.adddetails=true;
   console.log(this.busdetail);
  }
  passengerList(){
    
    this.router.navigate(['passenger-list']);
  }

}
