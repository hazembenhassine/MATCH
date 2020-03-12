import { Component, OnInit } from '@angular/core';
import {PageEvent} from '../../../models/PageEvent';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  imageURL = 'url("assets/logo.png")';

  pageIndex: number;
  size: number;

  constructor() { }

  ngOnInit() {
    this.pageIndex = 0;
    this.size = 17;
  }

  onPage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
  }

}
