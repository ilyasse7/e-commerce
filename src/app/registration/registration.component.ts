import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clicked = false;
  Signup(){
    this.clicked = true;
    console.log('fuck')
  }
  Signin(){
    this.clicked = false;
    console.log('fuck 2')
  }

  ngAfterViewInit(): void {
  }
}
