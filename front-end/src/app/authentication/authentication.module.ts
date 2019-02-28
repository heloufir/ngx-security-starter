// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/**
 * Authentication module routes
 */
const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    // Angular modules
    CommonModule,
    // Application routes injection into the application forChild() routes
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
