import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

// 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routes guards
import { AuthGuard } from '@services/security/guards/auth.guard';

const routes: Routes = [
  // Dashboard component
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  // Default redirection to dashboard if route is unknown
  { 
    path: '**', 
    redirectTo: '/dashboard'
  }
];

@NgModule({
  declarations: [
    // Dashboard component
    DashboardComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    // Bootstrap module
    NgbModule,
    // Router module
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
