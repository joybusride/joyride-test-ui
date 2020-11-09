import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from "../forgot-password.service";
import { ForgotPassword } from "../forgot-password";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

 
  forgotPasswordForm: FormGroup;

  
 forgotPassword: ForgotPassword= new ForgotPassword();
  message: string;
  
  
  constructor( private fb: FormBuilder,private forgotPasswordService: ForgotPasswordService,private router:Router) {
    this.createForm();
   }

   createForm(){
    this.forgotPasswordForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
     
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
     // alert(JSON.stringify(this.login));
     this.forgotPasswordService.forgotPassword(this.forgotPassword).subscribe(data => {
      //  alert(JSON.stringify(data));
        if(data.status == 'SUCCESS') {
         
          this.router.navigate(['changepassword']);
        }
        else {
          console.log(data.status);
          this.message = data.message;
          this.router.navigate(['login-fail']);
          
        }
      })
  }

}
