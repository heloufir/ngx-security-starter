// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Module components
import { LoginComponent } from './login.component';

// Material modules
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';

// Routes guards
import { NoAuthGuard } from '@services/security/guards/no-auth.guard';

/**
 * Module routes
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [ NoAuthGuard ]
  }
];

@NgModule({
  declarations: [
    // Module components
    LoginComponent
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
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class LoginModule { }
