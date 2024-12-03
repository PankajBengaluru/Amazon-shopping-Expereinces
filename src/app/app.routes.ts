import { CartComponent } from './cart/cart.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: ListingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes), CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule],

  exports: [RouterModule, MatInputModule,
    MatButtonModule,
    MatFormFieldModule]
})
export class AppRoutingModule { }
