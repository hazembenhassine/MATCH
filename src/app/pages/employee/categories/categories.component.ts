import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/Category';
import {MatchService} from '../../../services/match.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  rawCategories: Category[];
  categories: Category[][];

  constructor(private api: MatchService) { }

  ngOnInit() {
    this.api.getCategories().then(({list}) => {
      this.rawCategories = list;
      this.categories = this.rawCategories.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
    }).catch(() => {
      console.error('Error!');
    });
  }

}
