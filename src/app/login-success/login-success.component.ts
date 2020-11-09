import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(sessionStorage.getItem('userId'));
    console.log(sessionStorage.getItem('loginStatus'));
    
  }

}
