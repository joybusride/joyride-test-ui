import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  get password(): AbstractControl {
    return this.registrationForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.registrationForm.get('confirmPassword');
  }
  user=new User();
  constructor(private fb: FormBuilder, private router:Router,private userService:UserService) {
    this.createForm();
   }

   createForm(){
    this.registrationForm=this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,(control) => this.validatePasswords(control, 'password')]],
      confirmPassword:['',[Validators.required,(control) => this.validatePasswords(control, 'confirmPassword')]],
      contactNumber:['',[Validators.required,Validators.maxLength(10)]]
    });
  }
  
  ngOnInit() {} 

  

  validatePasswords(control: AbstractControl, name: string) {
    if (this.registrationForm === undefined || this.password.value === '' || this.confirmPassword.value === '') {
      return null;
    } else if (this.password.value === this.confirmPassword.value) {
      if (name === 'password' && this.confirmPassword.hasError('passwordMismatch')) {
        this.password.setErrors(null);
        this.confirmPassword.updateValueAndValidity();
      } else if (name === 'confirmPassword' && this.password.hasError('passwordMismatch')) {
        this.confirmPassword.setErrors(null);
        this.password.updateValueAndValidity();
      }
      return null;
    } else {
      return {'passwordMismatch': { value: 'The provided passwords do not match'}};
    }  
  }


  // onSubmit(){
  //   if(this.registrationForm.valid){
  //     //alert('User form is valid!!')
  //     this.router.navigate(['/reg-success'])
  //   } else {
  //    // alert('User form is not valid!!')
  //    this.router.navigate(['/reg-fail'])
  //   }
  //   // console.log(this.registrationForm.value);
  //   // this.registrationService.register(this.registrationForm.value)
  //   //   .subscribe(
  //   //     response=> console.log('Success!', response),
  //   //     error=> console.error('Error!',error)
      
  // }

  onSubmit() {
    //alert(JSON.stringify(this.customer));
    this.userService.register(this.user).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['reg-success'])
      }
      else {
        this.router.navigate(['reg-fail'])
      }
    })
  }
}