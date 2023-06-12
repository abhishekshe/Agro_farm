import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Name: string | undefined;
  password: string | undefined;

  login() {
    console.log('name:', this.Name);
    console.log('Password:', this.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
