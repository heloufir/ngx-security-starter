// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Roles component
import { RolesComponent } from './roles.component';

// Authentication guard
import { AuthGuard } from '@services/security/guards/auth.guard';

// Bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleGuard } from '@services/security/guards/role.guard';

// Material modules
import { MatProgressBarModule } from '@angular/material';

// Module routes
const routes: Routes = [
  // Roles component
  {
    path: '',
    component: RolesComponent,
    canActivate: [ AuthGuard, RoleGuard ],
    data: {
      expectedRolesType: 'any',
      expectedRoles: [ 'ROLE_ROLES' ]
    }
  }
];

@NgModule({
  declarations: [
    // Roles component
    RolesComponent
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
    MatProgressBarModule
  ]
})
export class RolesModule { }
