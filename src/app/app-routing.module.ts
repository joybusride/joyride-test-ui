import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';


const routes: Routes = [
  {path:'',component:SearchBusComponent},
  {path:'about',component: AboutUsComponent},
  {path:'terms',component:TermsOfUseComponent},
  {path:'contact',component:ContactUsComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
