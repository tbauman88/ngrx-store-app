import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as photosAction from '../actions/photos.actions';
import * as fromServices from '../../services';

@Injectable()
export class PhotosEffects {
  constructor(
    private actions$: Actions,
    private photoService: fromServices.PhotosService
  ) {}

  @Effect()
  loadPhoto$ = this.actions$.pipe(
    ofType(photosAction.LOAD_PHOTOS),
    switchMap(() => {
      return this.photoService.getPhotos().pipe(
        map(photos => new photosAction.LoadPhotosSuccess(photos)),
        catchError(error => of(new photosAction.LoadPhotosFail(error)))
      );
    })
  );
}
