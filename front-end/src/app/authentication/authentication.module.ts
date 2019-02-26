import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
