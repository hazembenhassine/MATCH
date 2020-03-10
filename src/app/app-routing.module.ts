import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChoiceComponent} from './pages/choice/choice.component';

const routes: Routes = [
  {
    path: 'choice',
    component: ChoiceComponent
  },
  {
    path: '',
    redirectTo: '/choice',
    pathMatch: 'full'
  },
  {
    path: 'employer',
    loadChildren: () => import('./pages/employer/employer.module').then(m => m.EmployerModule)
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
