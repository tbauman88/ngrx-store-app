import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  playlists$: Observable<any>;

  constructor(private store: Store<fromStore.FeedState>) {}

  ngOnInit() {
    this.playlists$ = this.store.pipe(select(fromStore.getAllPlaylists));
  }
}
