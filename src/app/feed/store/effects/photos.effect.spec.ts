import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, EMPTY, of } from 'rxjs';

import { PhotosService } from '../../services/';
import * as fromEffects from './photos.effect';
import * as fromActions from '../actions/photos.actions';

export class TestActions extends Actions {
  constructor() {
    super(EMPTY);
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('Songs Effects', () => {
  let actions$: TestActions;
  let service: PhotosService;
  let effects: fromEffects.PhotosEffects;

  const photos = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PhotosService,
        fromEffects.PhotosEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(PhotosService);
    effects = TestBed.get(fromEffects.PhotosEffects);

    spyOn(service, 'getPhotos').and.returnValue(of(photos));
  });

  describe('loadPhoto$', () => {
    it('should return a collection from LoadSongsSuccess', () => {
      const action = new fromActions.LoadPhotos();
      const completion = new fromActions.LoadPhotosSuccess(photos);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadPhoto$).toBeObservable(expected);
    });
  });
});
