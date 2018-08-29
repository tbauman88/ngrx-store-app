import * as fromSongs from './songs.reducer';
import * as fromActions from '../actions/songs.actions';
import { Song } from '../../models/song.model';

describe('Songs Reducer', () => {
  describe('Undefined Action', () => {
    it('should return the default state', () => {
      const { initialState } = fromSongs;
      const action = {} as any;
      const state = fromSongs.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_SONGS Action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromSongs;
      const action = new fromActions.LoadSongs();
      const state = fromSongs.reducer(initialState, action);

      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_SONGS_SUCCESS Action', () => {
    it('should map an array to entities', () => {
      const songs: Song[] = [
        { id: 4, name: 'No Brainer' },
        { id: 3, name: 'Girls Like You' },
        { id: 5, name: 'Freaky Friday' }
      ];

      const entities = {
        4: songs[0],
        3: songs[1],
        5: songs[2]
      };

      const { initialState } = fromSongs;
      const action = new fromActions.LoadSongsSuccess(songs);
      const state = fromSongs.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe('LOAD_SONGS_FAIL Action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromSongs;
      const action = new fromActions.LoadSongsFail({});
      const state = fromSongs.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = fromSongs;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.LoadSongsFail({});
      const state = fromSongs.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('VISUALISE_SONGS Action', () => {
    it('should set an array of number ids', () => {
      const { initialState } = fromSongs;
      const action = new fromActions.VisualiseSongs([1, 5, 9]);
      const state = fromSongs.reducer(initialState, action);

      expect(state.selectedSongs).toEqual([1, 5, 9]);
    });
  });
});

describe('SongsReducer Selectors', () => {
  describe('getSongsEntities', () => {
    it('should return entities', () => {
      const entities: { [key: number]: Song } = {
        1: { id: 4, name: 'No Brainer' },
        2: { id: 5, name: 'Freaky Friday' }
      };
      const { initialState } = fromSongs;
      const previousState = { ...initialState, entities };
      const slice = fromSongs.getSongsEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getSongsLoading', () => {
    it('should return loading', () => {
      const { initialState } = fromSongs;
      const previousState = { ...initialState, loading: true };
      const slice = fromSongs.getSongsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getSongsLoaded', () => {
    it('should return loaded', () => {
      const { initialState } = fromSongs;
      const previousState = { ...initialState, loaded: true };
      const slice = fromSongs.getSongsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getSelectedSongs', () => {
    it('should return selected songs', () => {
      const selectedSongs = [1, 2, 3, 4, 5];
      const { initialState } = fromSongs;
      const previousState = { ...initialState, selectedSongs };
      const slice = fromSongs.getSelectedSongs(previousState);

      expect(slice).toEqual(selectedSongs);
    });
  });
});
