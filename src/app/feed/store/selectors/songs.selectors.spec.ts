import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers, select } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors/songs.selectors';

import { Song } from '../../models/song.model';

describe('Songs Selectors', () => {
  let store: Store<fromReducers.FeedState>;

  const songs: Song[] = [
    {
      id: 3,
      name: 'Girls Like You',
      time: '3:55',
      artist: 'Maroon 5, Cardi B',
      album: 'Red Pills Blues'
    },
    {
      id: 4,
      name: 'No Brainer',
      time: '4:20',
      artist: 'DJ Khaled, Hystin Bieber, Quavo, Chance the Rapper',
      album: 'No Brainer'
    },
    {
      id: 5,
      name: 'Freaky Friday',
      time: '3:36',
      artist: 'Lil Dicky, Chris Brown',
      album: 'Freaky Friday'
    }
  ];

  const entities = {
    1: songs[0],
    2: songs[1],
    3: songs[2]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          products: combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getSongsEntities', () => {
    it('should return songs as entities', () => {
      let result;

      store
        .pipe(select(fromSelectors.getSongsEntities))
        .subscribe(value => (result = value));

      expect(result).toEqual({});

      store.dispatch(new fromActions.LoadSongsSuccess(songs));
      expect(result).toEqual(entities);
    });
  });

  describe('getSelectedSongs', () => {
    it('should return selected songs as ids', () => {
      let result;

      store
        .pipe(select(fromSelectors.getSelectedSongs))
        .subscribe(value => (result = value));

      store.dispatch(new fromActions.LoadSongsSuccess(songs));
      expect(result).toEqual([]);

      store.dispatch(new fromActions.VisualiseSongs([1, 3]));
      expect(result).toEqual([1, 3]);
    });
  });

  describe('getAllSongs', () => {
    it('should return songs as an array', () => {
      let result;

      store
        .pipe(select(fromSelectors.getAllSongs))
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadSongsSuccess(songs));

      expect(result).toEqual(songs);
    });
  });

  describe('getSongsLoaded', () => {
    it('should return songs loaded state', () => {
      let result;

      store
        .pipe(select(fromSelectors.getSongsLoaded))
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadSongsSuccess([]));

      expect(result).toEqual(true);
    });
  });

  describe('getSongsLoading', () => {
    it('should return songs loading state', () => {
      let result;

      store
        .pipe(select(fromSelectors.getSongsLoading))
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadSongs());

      expect(result).toEqual(true);
    });
  });
});
