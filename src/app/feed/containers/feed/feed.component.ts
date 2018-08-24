import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  photos$: Observable<any>;

  constructor(private store: Store<fromStore.FeedState>) {}

  ngOnInit() {
    this.photos$ = this.store.pipe(select(fromStore.getAllPhotos));
  }
}
