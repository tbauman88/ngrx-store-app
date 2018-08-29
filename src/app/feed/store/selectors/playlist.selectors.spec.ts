import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers, select } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import * as fromRoot from '../../../store';
import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors/playlist.selectors';

import { Playlist } from '../../models/playlist.model';

describe('Playlist Selectors', () => {
  let store: Store<fromReducers.FeedState>;

  const countryPlaylist: Playlist = {
    id: 1,
    name: 'Country on the Radio',
    image: 'https://picsum.photos/300?image=16',
    songs: [
      {
        id: 2,
        name: 'Tequila',
        time: '3:16',
        artist: 'Dan + Shay',
        album: 'Dan + Shay'
      },
      {
        id: 6,
        name: 'All Of It',
        time: '3:38',
        artist: 'Cole Swindell',
        album: 'All Of It'
      },
      {
        id: 7,
        name: "I Don't Know About You",
        time: '3:28',
        artist: 'Chris Lane',
        album: 'Laps Around The Sun'
      },
      {
        id: 8,
        name: 'Feathered Indians',
        time: '3:45',
        artist: 'Tyler Childers',
        album: 'Purgatory'
      }
    ]
  };

  const hitsPlaylist: Playlist = {
    id: 2,
    name: 'Hot Hits Canada',
    image: 'https://picsum.photos/300?image=44',
    songs: [
      {
        id: 1,
        name: 'In My Feelings',
        time: '3:57',
        artist: 'Drake',
        album: 'Scorpion'
      },
      {
        id: 3,
        name: 'Girls Like You',
        time: '3:55',
        artist: 'Maroon 5, Cardi B',
        album: 'Red Pills Blues'
      },
      {
        id: 5,
        name: 'Freaky Friday',
        time: '3:36',
        artist: 'Lil Dicky, Chris Brown',
        album: 'Freaky Friday'
      },
      {
        id: 4,
        name: 'No Brainer',
        time: '4:20',
        artist: 'DJ Khaled, Hystin Bieber, Quavo, Chance the Rapper',
        album: 'No Brainer'
      }
    ]
  };

  const playlists: Playlist[] = [countryPlaylist, hitsPlaylist];

  const entities = {
    1: playlists[0],
    2: playlists[1]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feed: combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);
  });

  describe('getPlaylistState', () => {
    it('should return state of playlist store', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPlaylistState))
        .subscribe(value => (result = value));

      expect(result).toEqual({
        entities: {},
        loaded: false,
        loading: false
      });

      store.dispatch(new fromActions.LoadPlaylistsSuccess(playlists));

      expect(result).toEqual({
        entities,
        loaded: true,
        loading: false
      });
    });
  });

  describe('getPlaylistEntities', () => {
    it('should return playlists as entities', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPlaylistEntities))
        .subscribe(value => (result = value));

      expect(result).toEqual({});

      store.dispatch(new fromActions.LoadPlaylistsSuccess(playlists));

      expect(result).toEqual(entities);
    });
  });

  describe('getSelectedPlaylist', () => {
    it('should return selected playlist as an entity', () => {
      let result;
      let params;

      store.dispatch(new fromActions.LoadPlaylistsSuccess(playlists));

      store.dispatch({
        type: 'ROUTER_NAVIGATION',
        payload: {
          routerState: {
            url: '/feed',
            queryParams: {},
            params: { playlistId: '2' }
          },
          event: {}
        }
      });

      store
        .pipe(select(fromRoot.getRouterState))
        .subscribe(routerState => (params = routerState.state.params));

      expect(params).toEqual({ playlistId: '2' });

      store
        .pipe(select(fromSelectors.getSelectedPlaylist))
        .subscribe(selectedPlaylist => (result = selectedPlaylist));

      expect(result).toEqual(entities[2]);
    });
  });

  describe('getPlaylistVisualised', () => {
    it('should return selected playlist composed with selected songs', () => {
      let result;
      let params;

      const songs = [
        { id: 4, name: 'Freaky Friday' },
        { id: 3, name: 'Girls Like You' },
        { id: 5, name: 'No Brainer' }
      ];

      store.dispatch(new fromActions.LoadPlaylistsSuccess(playlists));
      store.dispatch(new fromActions.LoadSongsSuccess(songs));
      store.dispatch(new fromActions.VisualiseSongs([5, 3, 4]));

      store.dispatch({
        type: 'ROUTER_NAVIGATION',
        payload: {
          routerState: {
            url: '/products',
            queryParams: {},
            params: { playlistId: '2' }
          },
          event: {}
        }
      });

      store
        .pipe(select(fromSelectors.getPlaylistVisualised))
        .subscribe(selectedPlaylist => (result = selectedPlaylist));

      const expectedSongs = [songs[2], songs[1], songs[0]];

      expect(result).toEqual({ ...entities[2], songs: expectedSongs });
    });
  });

  describe('getAllPlaylists', () => {
    it('should return playlists as an array', () => {
      let result;

      store
        .pipe(select(fromSelectors.getAllPlaylists))
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadPlaylistsSuccess(playlists));

      expect(result).toEqual(playlists);
    });
  });

  describe('getPlaylistLoaded', () => {
    it('should return playlists loaded state', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPlaylistLoaded))
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadPlaylistsSuccess([]));

      expect(result).toEqual(true);
    });
  });

  describe('getPlaylistLoading', () => {
    it('should return playlists loading state', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPlaylistLoading))
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadPlaylists());

      expect(result).toEqual(true);
    });
  });
});
