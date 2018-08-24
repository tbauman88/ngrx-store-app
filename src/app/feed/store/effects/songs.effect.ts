import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as songsActions from '../actions/songs.actions';
import * as fromServices from '../../services';

@Injectable()
export class SongsEffects {
  constructor(
    private actions$: Actions,
    private songsService: fromServices.SongsService
  ) {}

  @Effect()
  loadSongs$ = this.actions$.pipe(
    ofType(songsActions.LOAD_SONGS),
    switchMap(() => {
      console.log('service');

      return this.songsService.getSongs().pipe(
        map(songs => new songsActions.LoadSongsSuccess(songs)),
        catchError(error => of(new songsActions.LoadSongsFail(error)))
      );
    })
  );
}
