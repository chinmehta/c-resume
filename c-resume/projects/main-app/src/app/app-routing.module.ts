import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteFactory } from 'ng-micro-frontend';

const routes: Routes = [
  RouteFactory.createRoute('login-signup', 'http://localhost:4200'),
  RouteFactory.createRoute('details-form', 'http://localhost:4200'),
  RouteFactory.createRoute('list-details', 'http://localhost:4200'),
  RouteFactory.createRoute('pick-template', 'http://localhost:4200'),
  RouteFactory.createRoute('display-resume', 'http://localhost:4200'),
  RouteFactory.createRoute('save-as-pdf', 'http://localhost:4200'),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
