// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Forgot password component
import { ForgotPasswordComponent } from './forgot-password.component';

// Material modules
import { MatProgressSpinnerModule } from '@angular/material';

// Routes guards
import { NoAuthGuard } from '@services/security/guards/no-auth.guard';

// Module routes
const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    canActivate: [ NoAuthGuard ]
  }
];

@NgModule({
  declarations: [
    // Forgot password component
    ForgotPasswordComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    // Forms modules
    FormsModule,
    ReactiveFormsModule,
    // Application routes injection into the application forChild() routes
    RouterModule.forChild(routes),
    // Material modules
    MatProgressSpinnerModule
  ]
})
export class ForgotPasswordModule { }
