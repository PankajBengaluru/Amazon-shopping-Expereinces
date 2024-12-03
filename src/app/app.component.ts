import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent],
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
