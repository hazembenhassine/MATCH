import { Component, OnInit } from '@angular/core';
import {PageEvent} from '../../../models/PageEvent';
import {Business} from '../../../models/Business';
import {Category} from '../../../models/Category';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../services/match.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-agency-info',
  templateUrl: './agency-info.component.html',
  styleUrls: ['./agency-info.component.scss']
})
export class AgencyInfoComponent implements OnInit {

  environment = environment;

  pageIndex: number;

  category: Category;

  businessId: string;
  business: Business;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: MatchService) { }

  ngOnInit() {
    this.pageIndex = 0;
    this.businessId = this.route.snapshot.paramMap.get('id');
    this.api.getBusinessById(this.businessId).then(({business}) => {
      if (business == null) {
        this.router.navigate(['/employee']);
      }
      this.business = business;
    }).catch(() => {
      console.error('Error');
      this.router.navigate(['/employee']);
    });
  }

  setPageIndex(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }

  openInfo() {
    this.pageIndex = 1;
  }

}
