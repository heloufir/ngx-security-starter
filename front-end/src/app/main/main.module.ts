// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Module routes
const routes: Routes = [
  // Dashboard module
  { 
    path: 'dashboard', 
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  // Default redirection to dashboard if route is unknown
  { 
    path: '**', 
    redirectTo: '/dashboard'
  }
];

@NgModule({
  declarations: [],
  imports: [
    // Angular modules
    CommonModule,
    // Router module
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
