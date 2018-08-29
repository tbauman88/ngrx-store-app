import * as fromPlaylists from './playlists.reducer';
import * as fromActions from '../actions/playlist.actions';
import { Playlist } from '../../models/playlist.model';

describe('Playlists Reducer', () => {
  describe('Undefined Action', () => {
    it('should return the default state', () => {
      const { initialState } = fromPlaylists;
      const action = {} as any;
      const state = fromPlaylists.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_PLAYLISTS Action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromPlaylists;
      const action = new fromActions.LoadPlaylists();
      const state = fromPlaylists.reducer(initialState, action);

      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_PLAYLISTS_SUCCESS Action', () => {
    it('should map an array to entities', () => {
      const playlists: Playlist[] = [
        { id: 1, name: 'Country on the Radio', songs: [] },
        { id: 2, name: 'Hot Hits Canada', songs: [] }
      ];
      const entities = {
        1: playlists[0],
        2: playlists[1]
      };
      const { initialState } = fromPlaylists;
      const action = new fromActions.LoadPlaylistsSuccess(playlists);
      const state = fromPlaylists.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe('LOAD_PLAYLISTS_FAIL action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromPlaylists;
      const action = new fromActions.LoadPlaylistsFail({});
      const state = fromPlaylists.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadPlaylistsFail({});
      const state = fromPlaylists.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('CREATE_PLAYLIST_SUCCESS action', () => {
    it('should add the new playlist to the playlist array', () => {
      const playlists: Playlist[] = [
        { id: 1, name: 'Country on the Radio', songs: [] },
        { id: 2, name: 'Hot Hits Canada', songs: [] }
      ];

      const newPlaylist: Playlist = {
        id: 3,
        name: 'One Hit Wonders',
        songs: []
      };

      const entities = {
        1: playlists[0],
        2: playlists[1]
      };
      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, entities };
      const action = new fromActions.CreatePlaylistSuccess(newPlaylist);
      const state = fromPlaylists.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({ ...entities, 3: newPlaylist });
    });
  });

  describe('UPDATE_PLAYLIST_SUCCESS action', () => {
    it('should update the playlist', () => {
      const playlists: Playlist[] = [
        { id: 1, name: 'Country on the Radio', songs: [] },
        { id: 2, name: 'Hot Hits Canada', songs: [] }
      ];

      const updatedPlaylit = {
        id: 2,
        name: 'Hot Hits Canada',
        songs: [{ id: 8, name: 'Feathered Indians' }]
      };

      const entities = {
        1: playlists[0],
        2: playlists[1]
      };

      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, entities };
      const action = new fromActions.UpdatePlaylistSuccess(updatedPlaylit);
      const state = fromPlaylists.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.entities).toEqual({ ...entities, 2: updatedPlaylit });
    });
  });

  describe('REMOVE_PLAYLIST_SUCCESS action', () => {
    it('should remove the playlist', () => {
      const playlists: Playlist[] = [
        { id: 1, name: 'Country on the Radio', songs: [] },
        { id: 2, name: 'Hot Hits Canada', songs: [] }
      ];

      const entities = {
        1: playlists[0],
        2: playlists[1]
      };

      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, entities };
      const action = new fromActions.RemovePlaylistSuccess(playlists[0]);
      const state = fromPlaylists.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(1);
      expect(state.entities).toEqual({ 2: playlists[1] });
    });
  });
});

describe('Playlists Reducer Selectors', () => {
  describe('getPlaylistsEntities', () => {
    it('should return entities', () => {
      const entities: { [key: number]: Playlist } = {
        1: { id: 1, name: 'Country on the Radio', songs: [] },
        2: { id: 2, name: 'Hot Hits Canada', songs: [] }
      };
      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, entities };
      const slice = fromPlaylists.getPlaylistsEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getPlaylistsLoading', () => {
    it('should return loading', () => {
      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, loading: true };
      const slice = fromPlaylists.getPlaylistsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getPlaylistsLoaded', () => {
    it('should return loaded', () => {
      const { initialState } = fromPlaylists;
      const previousState = { ...initialState, loaded: true };
      const slice = fromPlaylists.getPlaylistsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });
});
