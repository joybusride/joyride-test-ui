import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  loginStatus="false";
  
  constructor(private fb: FormBuilder,private loginService: LoginService,private router:Router,private route:ActivatedRoute) {
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
        this.loginStatus="true";
        sessionStorage.setItem('userId', String(userId));
   
        sessionStorage.setItem('userFirstName', userFirstName);
        sessionStorage.setItem('userLastName', userLastName);
        sessionStorage.setItem('loginStatus',this.loginStatus);
        // this.router.navigate(['']);
        this.router.navigate(['']).then(()=>{
          window.location.reload();
        });
        //this.router.navigate(['/login-success']);
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate([''],{ relativeTo: this.route });
        // window.open('', '_self');
        
      }
      else {
        this.message = data.message;
        this.router.navigate(['login-fail']);
      }
    })
  }
 
}
