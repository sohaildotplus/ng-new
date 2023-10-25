import { Component } from "@angular/core";
import * as AOS from 'aos';


@Component({
    templateUrl:'./appoiment.component.html',
})

export class AppoimentComponent{
    ngOnInit(){
        AOS.init();
      }
}