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
  // Security module
  { 
    path: 'security', 
    loadChildren: './security/security.module#SecurityModule'
  },
  // Account settings module
  { 
    path: 'account-settings', 
    loadChildren: './account-settings/account-settings.module#AccountSettingsModule'
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
