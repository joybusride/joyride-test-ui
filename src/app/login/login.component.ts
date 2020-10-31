import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private fb: FormBuilder,private router:Router) {
    this.createForm();

   }

  ngOnInit(): void {

  }

  createForm(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
     // alert('User form is valid!!')
  this.router.navigate(['/']);
    } else {
     // alert('User form is not valid!!')
      this.router.navigate(['/']);
    }
  }

}
