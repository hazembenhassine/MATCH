import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChoiceComponent} from './pages/choice/choice.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuardService} from './services/authentification/auth-guard.service';

const routes: Routes = [
  {
    path: 'choice',
    component: ChoiceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/choice',
    pathMatch: 'full'
  },
  {
    path: 'employer',
    loadChildren: () => import('./pages/employer/employer.module').then(m => m.EmployerModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
