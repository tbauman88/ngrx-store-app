import * as fromSongs from '../actions/songs.actions';
import { Song } from '../../models/song.model';

export interface SongState {
  entities: { [id: number]: Song };
  loaded: boolean;
  loading: boolean;
  selectedSongs: number[];
}

export const initialState: SongState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedSongs: []
};

export function reducer(
  state = initialState,
  action: fromSongs.SongsActions
): SongState {
  switch (action.type) {
    case fromSongs.VISUALISE_SONGS: {
      const selectedSongs = action.payload;

      return {
        ...state,
        selectedSongs
      };
    }

    case fromSongs.LOAD_SONGS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSongs.LOAD_SONGS_SUCCESS: {
      const songs = action.payload;

      const entities = songs.reduce(
        (entities: { [id: number]: Song }, song: Song) => {
          return {
            ...entities,
            [song.id]: song
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }

    case fromSongs.LOAD_SONGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }

  return state;
}

export const getSongsEntities = (state: SongState) => state.entities;
export const getSongsLoaded = (state: SongState) => state.loaded;
export const getSongsLoading = (state: SongState) => state.loading;
export const getSelectedSongs = (state: SongState) => state.selectedSongs;
