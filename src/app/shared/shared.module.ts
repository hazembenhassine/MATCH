import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPaginatorComponent } from './match-paginator/match-paginator.component';



@NgModule({
  declarations: [MatchPaginatorComponent],
  exports: [
    MatchPaginatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
