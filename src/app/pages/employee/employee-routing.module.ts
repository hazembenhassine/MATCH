import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyInfoComponent } from './agency-info/agency-info.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'agency-list', component: AgencyListComponent },
  { path: 'agency-info', component: AgencyInfoComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
