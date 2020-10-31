import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  pay(){
    console.log("Payment successful");
  }

}
