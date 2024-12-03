import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  usersMap: Map<string, string> = new Map([
    ['user', 'password'],
    ['admin', 'admin123'],
    ['pankaj', 'pankaj123']
  ]);

  constructor(private router: Router) { }

  login() {
    if (this.usersMap.get(this.username) === this.password) {
      console.log("Login successful");
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/listing']);
    } else {
      this.loginError = true;
    }
  }

  ngOnInit() {
    if (sessionStorage.getItem('isLoggedIn') === 'false') {
      this.router.navigate(['/listing']);
    }
  }
}
