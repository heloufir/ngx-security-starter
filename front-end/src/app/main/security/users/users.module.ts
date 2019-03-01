// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Users component
import { UsersComponent } from './users.component';

// Authentication guard
import { AuthGuard } from '@services/security/guards/auth.guard';

// Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleGuard } from '@services/security/guards/role.guard';

// Material modules
import {
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatCheckboxModule
} from '@angular/material';

// Module routes
const routes: Routes = [
  // Users component
  {
    path: '',
    component: UsersComponent,
    canActivate: [ AuthGuard, RoleGuard ],
    data: {
      expectedRolesType: 'any',
      expectedRoles: [ 'ROLE_USERS' ]
    }
  }
];

@NgModule({
  declarations: [
    // Users component
    UsersComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Bootstrap modules
    NgbModule,
    // Router module
    RouterModule.forChild(routes),
    // Material modules
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ]
})
export class UsersModule { }
