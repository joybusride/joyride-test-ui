import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  status:boolean
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginForm(){
    this.router.navigate(['/login'])
  }

  registerForm(){
    this.router.navigate(['/register'])
  }

  checking(){
    // session logic 
    // store login status in the sessions
    this.status=true
    this.router.navigate(['/login',1])
  }

}
