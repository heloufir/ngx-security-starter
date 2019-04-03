// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Account settings component
import { AccountSettingsComponent } from './account-settings.component';

// Authentication guard
import { AuthGuard } from '@services/security/guards/auth.guard';

// Bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Material modules
import { MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

// Module routes
const routes: Routes = [
  // Dashboard component
  {
    path: '',
    component: AccountSettingsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [
    // Account settings component
    AccountSettingsComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Bootstrap module
    NgbModule,
    // Router module
    RouterModule.forChild(routes),
    // Material modules
    MatProgressSpinnerModule,
    MatProgressBarModule
  ]
})
export class AccountSettingsModule { }
