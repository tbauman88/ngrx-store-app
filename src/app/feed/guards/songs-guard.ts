import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class SongsGuard implements CanActivate {
  constructor(private store: Store<fromStore.FeedState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getSongsLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadSongs());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
