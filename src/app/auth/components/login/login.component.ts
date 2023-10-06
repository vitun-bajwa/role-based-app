import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  checkbox: boolean = true;
  token: string = '';
  inputvalue: string = '';
  Phide: boolean = true;

  valuecheck(event: any) {
    if (event.target.value !== '') {
      this.inputvalue = '';
      if (event.type == 'click') {
        if (event.target.value == '') {
          this.inputvalue = '';
        } else {
          this.inputvalue = 'Required';
        }
      }
    } else if (event.type == 'keypress') {
      this.inputvalue = '';
    }
  }

  login(item:any) {

  }
}
