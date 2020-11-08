import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BusBookingDetail } from '../bus-booking-detail';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  cardNumber;
  month;
  year;
  cvv;
  amount:number=0;
  bookingDetail=new BusBookingDetail()
  navigationExtras: NavigationExtras

  constructor(private router:Router) { 
    let navigation = this.router.getCurrentNavigation();
    this.bookingDetail = navigation.extras.state as BusBookingDetail
    console.log("This is CARD PAYMENT COMPONENT")
    console.log(this.bookingDetail)
    console.log(this.bookingDetail.paymentType)

  }

  ngOnInit(): void {
  }

  pay(){
    console.log("Payment successful");
    this.router.navigate(['/feedback'])
  }

}
