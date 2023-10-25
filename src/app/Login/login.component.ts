import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  ngOnInit(){
    AOS.init();
  }
  constructor(private router:Router){}

 singhUp(){
  this.router.navigate(['/signup'])
 }
}
