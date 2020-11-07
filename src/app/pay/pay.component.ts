import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  state;
  payType:string;

  navigationExtras: NavigationExtras
  constructor(private router:Router) {

    let navigation = this.router.getCurrentNavigation();
    this.state = navigation.extras.state as Passenger
    console.log("This is PAYMENT COMPONENT")
   }

  ngOnInit(): void {
  }
  cardPayment()
  {
    this.payType="DebitCard";
    this.navigationExtras={state:this.state};
    this.router.navigate(['/card-payment'],this.navigationExtras);
  }

}
