import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { SignUpComponent } from './Signup/sign-up.component';
import { PricingComponent } from './Price/pricing.component';
import { ContactComponent } from './Contact/ccontact.component';
import { AppoimentComponent } from './Appoiment/appoiment.component';
import { BillingComponent } from './Billing/billing.component';
import { PageComponent } from './Error-Page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    PricingComponent,
    ContactComponent,
    AppoimentComponent,
    BillingComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'top' 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
