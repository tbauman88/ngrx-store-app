import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, EMPTY, of } from 'rxjs';

import { PlaylistsService } from '../../services/';
import * as fromEffects from './playlists.effect';
import * as fromActions from '../actions/playlist.actions';

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

describe('PlaylistEffects', () => {
  let actions$: TestActions;
  let service: PlaylistsService;
  let effects: fromEffects.PlaylistEffects;

  const playlists = [
    {
      id: 1,
      name: 'Country on the Radio',
      image: 'https://picsum.photos/300?image=16',
      songs: [
        { id: 2, name: 'Tequila' },
        { id: 6, name: 'All Of It' },
        { id: 7, name: "I Don't Know About You" },
        { id: 8, name: 'Feathered Indians' }
      ]
    },
    {
      id: 2,
      name: 'Hot Hits Canada',
      image: 'https://picsum.photos/300?image=44',
      songs: [
        { id: 1, name: 'In My Feelings' },
        { id: 3, name: 'Girls Like You' },
        { id: 5, name: 'Freaky Friday' }
      ]
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlaylistsService,
        fromEffects.PlaylistEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(PlaylistsService);
    effects = TestBed.get(fromEffects.PlaylistEffects);

    spyOn(service, 'getPlaylists').and.returnValue(of(playlists));
    spyOn(service, 'createPlaylist').and.returnValue(of(playlists[0]));
    spyOn(service, 'updatePlaylist').and.returnValue(of(playlists[0]));
    spyOn(service, 'removePlaylist').and.returnValue(of(playlists[0]));
  });

  describe('loadPlaylist$', () => {
    it('should return a collection from LoadPlaylistsSuccess', () => {
      const action = new fromActions.LoadPlaylists();
      const completion = new fromActions.LoadPlaylistsSuccess(playlists);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadPlaylist$).toBeObservable(expected);
    });
  });

  describe('createPlaylist$', () => {
    it('should create a new playlist', () => {
      const action = new fromActions.CreatePlaylist(playlists[0]);
      const completion = new fromActions.CreatePlaylistSuccess(playlists[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createPlaylist$).toBeObservable(expected);
    });
  });

  describe('updatePlaylist$', () => {
    it('should update playlist', () => {
      const action = new fromActions.UpdatePlaylist(playlists[0]);
      const completion = new fromActions.UpdatePlaylistSuccess(playlists[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.updatePlaylist$).toBeObservable(expected);
    });
  });

  describe('removePlaylist$', () => {
    it('should remove playlist', () => {
      const action = new fromActions.RemovePlaylist(playlists[0]);
      const completion = new fromActions.RemovePlaylistSuccess(playlists[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.removePlaylist$).toBeObservable(expected);
    });
  });
});
