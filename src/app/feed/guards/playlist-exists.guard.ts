import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';

import * as fromStore from '../store';
import { Playlist } from '../models/playlist.model';

@Injectable()
export class PlaylistExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.FeedState>) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.playlistId, 10);
        return this.hasPlaylist(id);
      })
    );
  }

  hasPlaylist(id: number): Observable<boolean> {
    return this.store.select(fromStore.getPlaylistEntities).pipe(
      map((entities: { [key: number]: Playlist }) => !!entities[id]),
      take(1)
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPlaylistLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPlaylists());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
