import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ngOnInit(){
    AOS.init();
  }
  constructor(private router: Router) {}
  About() {
    this.router.navigate(['/about']); 
  }

  Billing() {
    this.router.navigate(['/billing']);
  }
  Pricing() {
    this.router.navigate(['/pricing']); 
  }
  signUp(){
    this.router.navigate(['/signup']);
   }
}
