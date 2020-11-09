import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { AppComponent } from './app.component';
import { BusCoachListComponent } from './bus-coach-list/bus-coach-list.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoachInfoComponent } from './coach-info/coach-info.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { PayComponent } from './pay/pay.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { SeatgridComponent } from './seatgrid/seatgrid.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { WalletPinVerifyComponent } from './wallet-pin-verify/wallet-pin-verify.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { RegFailComponent } from './reg-fail/reg-fail.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginFailComponent } from './login-fail/login-fail.component';

const routes: Routes = [
  {path:'',component:SearchBusComponent},
  {path:'about',component: AboutUsComponent},
  {path:'terms',component:TermsOfUseComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'profile',component:ProfileComponent},
  {path:'wpin',component:WalletPinVerifyComponent},
  {path:'wallet-ui',component:WalletPageComponent},
  {path:'coach-list',component:BusCoachListComponent},
  {path:'coach-info',component:CoachInfoComponent},
  {path:'card-payment',component:CardPaymentComponent},
  {path:'bus-list',component:BusListComponent},
  {path:'passenger-list',component:AddPassengerComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reg-success',component:RegSuccessComponent},
  {path:'reg-fail',component:RegFailComponent},
  {path:'login-success',component:LoginSuccessComponent},
  {path:'login-fail',component:LoginFailComponent}
  {path:'seat',component:SeatgridComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'pay',component:PayComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
