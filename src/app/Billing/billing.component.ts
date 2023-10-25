import { Component } from "@angular/core";
import * as AOS from 'aos';

@Component({
    templateUrl: './billing.component.html',
})

export class BillingComponent{
    ngOnInit(){
        AOS.init();
      }
}