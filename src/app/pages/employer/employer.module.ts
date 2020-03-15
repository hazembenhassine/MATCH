import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { RecruitListComponent } from './recruit-list/recruit-list.component';
import {SharedModule} from '../../shared/shared.module';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateResumeComponent } from './candidate-resume/candidate-resume.component';
import { AuthService } from '../../services/authentification/auth-service.service';
import {MatchService} from '../../services/match.service';


@NgModule({
  declarations: [CategoriesComponent, RecruitListComponent, CandidateComponent, CandidateResumeComponent],
  imports: [
      CommonModule,
      EmployerRoutingModule,
      SharedModule
  ],
  providers: [
    AuthService,
    MatchService
  ]
})
export class EmployerModule { }
