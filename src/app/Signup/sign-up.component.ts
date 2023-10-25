import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  ngOnInit(){
    AOS.init();
  }
  constructor(private router:Router){}
  Login(){
    this.router.navigate(['/login']);
  }
}
