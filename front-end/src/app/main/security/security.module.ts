// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Module routes
const routes: Routes = [
  // Users module
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  // Profiles module
  {
    path: 'profiles',
    loadChildren: './profiles/profiles.module#ProfilesModule'
  },
  // Roles module
  {
    path: 'roles',
    loadChildren: './roles/roles.module#RolesModule'
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
export class SecurityModule { }
