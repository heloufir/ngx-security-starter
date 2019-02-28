import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Main application routes
 * 
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
const routes: Routes = [
  // Authentication module
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  // Main module
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    // Application routes injection into the application forRoot() routes
    RouterModule.forRoot(routes)
  ],
  exports: [
    // Angular router module
    RouterModule
  ]
})
export class AppRoutingModule { }
