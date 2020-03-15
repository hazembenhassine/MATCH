import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {RecruitListComponent} from './recruit-list/recruit-list.component';
import {CandidateComponent} from './candidate/candidate.component';
import {CandidateResumeComponent} from './candidate-resume/candidate-resume.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'recruit-list/:id', component: RecruitListComponent},
  { path: 'candidate/:id', component: CandidateComponent},
  { path: 'candidate-resume/:id', component: CandidateResumeComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
