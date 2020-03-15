import { Component, OnInit } from '@angular/core';
import {MatchService} from '../../../services/match.service';
import {Candidate} from '../../../models/Candidate';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidateId: string;
  candidate: Candidate;

  environment = environment;

  constructor(private api: MatchService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.candidateId = this.route.snapshot.paramMap.get('id')
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

}
