import { Component, OnInit } from '@angular/core';
import {PageEvent} from '../../../models/PageEvent';
import {Category} from '../../../models/Category';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../services/match.service';
import {Business} from '../../../models/Business';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  environment = environment;

  pageIndex: number;
  size: number;

  categoryId: string;
  category: Category;
  businesses: Business[];

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
        this.router.navigate(['/employee']);
      }
    }).catch(() => {
      console.error('Error');
      this.router.navigate(['/employee']);
    });

    this.api.getBusinesses().then(({list}) => {
      this.businesses = list;
      this.size = this.businesses.length;
    }).catch(() => {
      console.error('Error');
      this.router.navigate(['/employee']);
    });
  }

  onPage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
  }

}
