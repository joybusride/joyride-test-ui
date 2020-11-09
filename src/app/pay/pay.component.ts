import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BusBookingDetail, PaymentType } from '../bus-booking-detail';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  state;
  payType:string;
  bookingDetail=new BusBookingDetail()
  navigationExtras: NavigationExtras
  constructor(private router:Router) {

    let navigation = this.router.getCurrentNavigation();
    this.bookingDetail = navigation.extras.state as BusBookingDetail
    this.state=this.bookingDetail.passengerList
    console.log("This is PAYMENT COMPONENT")
   }

  ngOnInit(): void {
  }
  cardPayment()
  {
    this.payType="DebitCard";
    this.bookingDetail.passengerList=this.state
    this.bookingDetail.paymentType=PaymentType.card
    this.navigationExtras={state:this.bookingDetail};
    this.router.navigate(['/card-payment'],this.navigationExtras);
  }

}
