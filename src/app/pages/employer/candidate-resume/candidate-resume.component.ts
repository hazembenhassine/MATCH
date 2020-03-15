import { Component, OnInit } from '@angular/core';
import {Candidate} from '../../../models/Candidate';
import {MatchService} from '../../../services/match.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-candidate-resume',
  templateUrl: './candidate-resume.component.html',
  styleUrls: ['./candidate-resume.component.scss']
})
export class CandidateResumeComponent implements OnInit {

  environment = environment;

  pageIndex: number;
  candidateId: string;
  candidate: Candidate;

  constructor(private api: MatchService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.pageIndex = 0;
    this.candidateId = this.route.snapshot.paramMap.get('id');
    this.api.getCandidateById(this.candidateId).then(({candidate}) => {
      if (candidate == null) {
        this.router.navigate(['/employer']);
      }
      this.candidate = candidate;
    }).catch(() => {
      console.error('Error');
      this.router.navigate(['/employer']);
    });
  }

  setPageIndex(index: number) {
    this.pageIndex = index;
  }

}
