import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./Price/pricing.component";
import { SignUpComponent } from "./Signup/sign-up.component";
import { LoginComponent } from "./Login/login.component";
import { ContactComponent } from "./Contact/ccontact.component";
import { AboutusComponent } from "./Aboutus/about.component";
import { PopupComponent } from "./Popup/popup.component";
import { AppoimentComponent } from "./Appoiment/appoiment.component";
import { BillingComponent } from "./Billing/billing.component";
import { PageComponent } from "./Error-Page/page.component";



export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {path:'pricing',component:PricingComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'signup',component:SignUpComponent},
    {path:'about',component:AboutusComponent},
    {path:'popup',component:PopupComponent},
    {path:'appoiment',component:AppoimentComponent},
    {path:'billing',component:BillingComponent},
    {path:'**', component:PageComponent}
    
  ];