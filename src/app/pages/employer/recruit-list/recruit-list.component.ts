import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../services/match.service';
import {Category} from '../../../models/Category';
import {Candidate} from '../../../models/Candidate';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.scss']
})
export class RecruitListComponent implements OnInit {

  categoryId: string;
  category: Category;
  rawCandidates: Candidate[];
  candidates: Candidate[][][];

  pageIndex: number;
  size: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: MatchService) { }

  ngOnInit() {
    this.pageIndex = 0;
    this.size = 0;
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.api.getCategoryById(this.categoryId).then(({category}) => {
      this.category = category;
      if (this.category == null) {
        this.router.navigate(['/employer']);
      }
    }).catch(() => {
      console.error('Error');
      this.router.navigate(['/employer']);
    });

    this.api.getCandidatesByCategoryId(this.categoryId).then(({list}) => {
      this.rawCandidates = list;
      this.size = this.rawCandidates.length;
      const candidates = this.rawCandidates.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
      this.candidates = candidates.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
    }).catch(() => {
      console.error('Error');
      this.router.navigate(['/employer']);
    });

  }

}
