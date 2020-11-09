import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePassword } from '../change-password';
import { ChangePasswordService } from '../change-password.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  get newPassword(): AbstractControl {
    return this.resetPasswordForm.get('newPassword');
  }

  get confirmPassword(): AbstractControl {
    return this.resetPasswordForm.get('confirmPassword');
  }

  resetPasswordForm: FormGroup;

  changePassword: ChangePassword= new ChangePassword();
  message: string;


  constructor(private fb: FormBuilder, private router:Router,private changePasswordService:ChangePasswordService) {
    this.createForm();
   }

   createForm(){
    this.resetPasswordForm=this.fb.group({
     
      newPassword:['',[Validators.required,(control) => this.validatePasswords(control, 'newPassword')]],
      confirmPassword:['',[Validators.required,(control) => this.validatePasswords(control, 'confirmPassword')]],
    
    });
  }
  
  ngOnInit(): void {
  }

  
  validatePasswords(control: AbstractControl, name: string) {
    if (this.resetPasswordForm === undefined || this.newPassword.value === '' || this.confirmPassword.value === '') {
      return null;
    } else if (this.newPassword.value === this.confirmPassword.value) {
      if (name === 'newPassword' && this.confirmPassword.hasError('passwordMismatch')) {
        this.newPassword.setErrors(null);
        this.confirmPassword.updateValueAndValidity();
      } else if (name === 'confirmPassword' && this.newPassword.hasError('passwordMismatch')) {
        this.confirmPassword.setErrors(null);
        this.newPassword.updateValueAndValidity();
      }
      return null;
    } else {
      return {'passwordMismatch': { value: 'The provided passwords do not match'}};
    }  
  }


  onSubmit() {
    // alert(JSON.stringify(this.login));
    this.changePasswordService.changePassword(this.changePassword).subscribe(data => {
     //  alert(JSON.stringify(data));
       if(data.status == 'SUCCESS') {
        
         this.router.navigate(['login-success']);
       }
       else {
        // console.log(data.status);
         this.message = data.message;
         this.router.navigate(['login-fail']);
         
       }
     })
 }

}
