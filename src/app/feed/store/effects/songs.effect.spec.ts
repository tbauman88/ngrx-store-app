import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, EMPTY, of } from 'rxjs';

import { SongsService } from '../../services/';
import * as fromEffects from './songs.effect';
import * as fromActions from '../actions/songs.actions';

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
  let service: SongsService;
  let effects: fromEffects.SongsEffects;

  const songs = [
    { id: 4, name: 'No Brainer' },
    { id: 3, name: 'Girls Like You' },
    { id: 5, name: 'Freaky Friday' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SongsService,
        fromEffects.SongsEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(SongsService);
    effects = TestBed.get(fromEffects.SongsEffects);

    spyOn(service, 'getSongs').and.returnValue(of(songs));
  });

  describe('loadSongs$', () => {
    it('should return a collection from LoadSongsSuccess', () => {
      const action = new fromActions.LoadSongs();
      const completion = new fromActions.LoadSongsSuccess(songs);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadSongs$).toBeObservable(expected);
    });
  });
});
