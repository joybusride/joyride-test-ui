import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  status: boolean
  statusLogin;
  constructor(private router: Router) {


    this.statusLogin = sessionStorage.getItem('loginStatus');
    console.log(this.statusLogin);
    this.status = Boolean(JSON.parse(this.statusLogin));
    console.log(this.status);
    $(".dropdown").css('display', 'none');
  }


  ngOnInit(): void {


  }
  
  loginForm() {
    this.router.navigate(['/login'])
  }

  registerForm() {
    this.router.navigate(['/register'])
  }

  checking() {
    // session logic 
    // store login status in the sessions
    // this.status=true
    this.router.navigate(['/login', 1])
  }
  myFunction() {
    // $(".dropdown").css('display', 'show');
  }
  onChange(val) {
    console.log(val);
    // this.edited = false;
    if (val === "Signout") {
      // console.log(val==="Signout");
      this.statusLogin = sessionStorage.getItem('loginStatus');
      console.log(sessionStorage.getItem('userId'));
      console.log(this.statusLogin);
      sessionStorage.clear();
      window.location.reload();
      this.statusLogin = sessionStorage.getItem('loginStatus');
      console.log(this.statusLogin);
      this.status = false;


    }

  }


  refresh() {

    window.location.reload();
    return;

  }



}
