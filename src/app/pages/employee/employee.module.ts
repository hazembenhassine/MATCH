import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import {SharedModule} from '../../shared/shared.module';
import { AgencyInfoComponent } from './agency-info/agency-info.component';


@NgModule({
  declarations: [CategoriesComponent, AgencyListComponent, AgencyInfoComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
