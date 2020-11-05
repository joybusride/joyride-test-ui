import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  pay(){
    console.log("Payment successful");
    this.router.navigate(['/feedback'])
  }

}
