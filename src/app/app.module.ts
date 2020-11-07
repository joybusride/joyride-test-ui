import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidebnavDashboardComponent } from './sidebnav-dashboard/sidebnav-dashboard.component';
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletPinVerifyComponent } from './wallet-pin-verify/wallet-pin-verify.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { BusCoachListComponent } from './bus-coach-list/bus-coach-list.component';
import { CoachInfoComponent } from './coach-info/coach-info.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeatgridComponent } from './seatgrid/seatgrid.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerService } from './passenger.service';
import { PayComponent } from './pay/pay.component';
import { LoginHomePageComponent } from './login-home-page/login-home-page.component';
import { HomeComponentExtrasComponent } from './home-component-extras/home-component-extras.component';
import { SearchBusService } from './search-bus.service';
import { CoachBusService } from './coach-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    SearchBusComponent,
    AboutUsComponent,
    TermsOfUseComponent,
    ContactUsComponent,
    TopHeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidebnavDashboardComponent,
    ChangePasswordComponent,
    ProfileComponent,
    WalletPinVerifyComponent,
    WalletPageComponent,
    BusCoachListComponent,
    CoachInfoComponent,
    CardPaymentComponent,
    BusListComponent,
    AddPassengerComponent,
    LoginComponent,
    RegisterComponent,
    SeatgridComponent,
    FeedbackComponent,
    PayComponent
    LoginHomePageComponent,
    HomeComponentExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SearchBusService,CoachBusService,PassengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
