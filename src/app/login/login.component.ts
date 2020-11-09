import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "../login.service";
import { Login } from "../login";
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  

  loginForm: FormGroup;

  login: Login = new Login();
  message: string;
  
  
  constructor(private fb: FormBuilder,private loginService: LoginService,private router:Router) {
    this.createForm();
   }

   createForm(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }


  
  loginUser() {

    this.loginService.login(this.login).subscribe(data => {
 
      if(data.status == 'SUCCESS') {
        let userId = data.userId;
        let userFirstName = data.firstName;
        let userLastName =data.lastName
       
        sessionStorage.setItem('userId', String(userId));
   
        sessionStorage.setItem('userFirstName', userFirstName);
        sessionStorage.setItem('userLastName', userLastName);
        this.router.navigate(['login-success']);
      }
      else {
        this.message = data.message;
        this.router.navigate(['login-fail']);
      }
    })
  }
 
}
