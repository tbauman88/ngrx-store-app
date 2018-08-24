import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromRoot from '../../../store';
import * as playlistsAction from '../actions/playlist.actions';
import * as fromServices from '../../services';

@Injectable()
export class PlaylistEffects {
  constructor(
    private actions$: Actions,
    private playlistService: fromServices.PlaylistsService
  ) {}

  @Effect()
  loadPlaylist$ = this.actions$.pipe(
    ofType(playlistsAction.LOAD_PLAYLISTS),
    switchMap(() => {
      return this.playlistService.getPlaylists().pipe(
        map(playlists => new playlistsAction.LoadPlaylistsSuccess(playlists)),
        catchError(error => of(new playlistsAction.LoadPlaylistsFail(error)))
      );
    })
  );

  @Effect()
  createPlaylist$ = this.actions$.pipe(
    ofType(playlistsAction.CREATE_PLAYLIST),
    map((action: playlistsAction.CreatePlaylist) => action.payload),
    switchMap(playlist => {
      return this.playlistService.createPlaylist(playlist).pipe(
        map(playlist => new playlistsAction.CreatePlaylistSuccess(playlist)),
        catchError(error => of(new playlistsAction.CreatePlaylistFail(error)))
      );
    })
  );

  @Effect()
  createPlaylistSuccess$ = this.actions$.pipe(
    ofType(playlistsAction.CREATE_PLAYLIST_SUCCESS),
    map((action: playlistsAction.CreatePlaylistSuccess) => action.payload),
    map(playlist => {
      return new fromRoot.Go({
        path: ['/feed', playlist.id]
      });
    })
  );

  @Effect()
  updatePlaylist = this.actions$.pipe(
    ofType(playlistsAction.UPDATE_PLAYLIST),
    map((action: playlistsAction.UpdatePlaylist) => action.payload),
    switchMap(playlist => {
      return this.playlistService.updatePlaylist(playlist).pipe(
        map(playlist => new playlistsAction.UpdatePlaylistSuccess(playlist)),
        catchError(error => of(new playlistsAction.UpdatePlaylistFail(error)))
      );
    })
  );

  @Effect()
  removePlaylist = this.actions$.pipe(
    ofType(playlistsAction.REMOVE_PLAYLIST),
    map((action: playlistsAction.RemovePlaylist) => action.payload),
    switchMap(playlist => {
      return this.playlistService.removePlaylist(playlist).pipe(
        map(() => new playlistsAction.RemovePlaylistSuccess(playlist)),
        catchError(error => of(new playlistsAction.RemovePlaylistFail(error)))
      );
    })
  );

  @Effect()
  handlePlaylistSuccess$ = this.actions$.pipe(
    ofType(
      playlistsAction.UPDATE_PLAYLIST_SUCCESS,
      playlistsAction.REMOVE_PLAYLIST_SUCCESS
    ),
    map(Playlist => {
      return new fromRoot.Go({ path: ['/feed'] });
    })
  );
}
