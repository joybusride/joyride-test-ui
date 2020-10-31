import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-pin-verify',
  templateUrl: './wallet-pin-verify.component.html',
  styleUrls: ['./wallet-pin-verify.component.css']
})
export class WalletPinVerifyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onVerify(){
    console.log("Hello World!")
    this.router.navigate(['/wallet-ui']) 
    console.log("Hello World!")
  }

}
