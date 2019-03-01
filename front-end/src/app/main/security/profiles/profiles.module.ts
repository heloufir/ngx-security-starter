// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Profiles component
import { ProfilesComponent } from './profiles.component';

// Authentication guard
import { AuthGuard } from '@services/security/guards/auth.guard';

// Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleGuard } from '@services/security/guards/role.guard';

// Material modules
import { MatProgressBarModule } from '@angular/material';

// Module routes
const routes: Routes = [
  // Profiles component
  {
    path: '',
    component: ProfilesComponent,
    canActivate: [ AuthGuard, RoleGuard ],
    data: {
      expectedRolesType: 'any',
      expectedRoles: [ 'ROLE_PROFILES' ]
    }
  }
];

@NgModule({
  declarations: [
    // Profiles component
    ProfilesComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    // Bootstrap modules
    NgbModule,
    // Router module
    RouterModule.forChild(routes),
    // Material modules
    MatProgressBarModule
  ]
})
export class ProfilesModule { }
