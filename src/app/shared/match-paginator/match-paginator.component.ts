import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PageEvent} from '../../models/PageEvent';

@Component({
  selector: 'app-match-paginator',
  templateUrl: './match-paginator.component.html',
  styleUrls: ['./match-paginator.component.scss']
})
export class MatchPaginatorComponent implements OnInit, OnChanges {

  @Input() pageIndex: number;
  @Input() size: number;
  @Input() pageSize: number;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  pages: number[];

  constructor() { }

  ngOnInit() {
    this.pages = Array(Math.ceil(this.size / this.pageSize)).fill(0).map((x, i) => i);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.size) {
      this.pages = Array(Math.ceil(changes.size.currentValue / this.pageSize)).fill(0).map((x, i) => i);
    }
  }

  emitEvent() {
    this.page.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    });
  }

  setPageIndex(index: number) {
    this.pageIndex = index;
    this.emitEvent();
  }

  incrementPageIndex() {
    this.pageIndex++;
    this.emitEvent();
  }

  decrementPageIndex() {
    this.pageIndex--;
    this.emitEvent();
  }

}
