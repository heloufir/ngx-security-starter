// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Dashboard component
import { DashboardComponent } from './dashboard.component';

// Authentication guard
import { AuthGuard } from '@services/security/guards/auth.guard';

// Bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Material modules
import { MatProgressSpinnerModule } from '@angular/material';

// Shared module
import { SharedModule } from '@app/core/modules/shared.module';

// Module routes
const routes: Routes = [
  // Dashboard component
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
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
    RouterModule.forChild(routes),
    // Material modules
    MatProgressSpinnerModule,
    // Shared module
    SharedModule
  ]
})
export class DashboardModule { }
