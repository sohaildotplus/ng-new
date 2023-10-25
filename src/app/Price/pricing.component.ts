import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos";
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  ngOnInit(){
    AOS.init();
  }
  constructor(private router: Router) {}
  signUp(){
    this.router.navigate(['/signup']);
   }
}
