import * as fromPlaylists from '../actions/playlist.actions';
import { Playlist } from '../../models/playlist.model';
import { Song } from '../../models/song.model';

export interface PlaylistState {
  entities: { [id: number]: Playlist };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PlaylistState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPlaylists.PlaylistsAction
): PlaylistState {
  switch (action.type) {
    case fromPlaylists.LOAD_PLAYLISTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPlaylists.LOAD_PLAYLISTS_SUCCESS: {
      const playlists = action.payload;

      const entities = playlists.reduce(
        (entities: { [id: number]: Playlist }, playlist: Playlist) => {
          return {
            ...entities,
            [playlist.id]: playlist
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

    case fromPlaylists.LOAD_PLAYLISTS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case fromPlaylists.UPDATE_PLAYLIST_SUCCESS:
    case fromPlaylists.CREATE_PLAYLIST_SUCCESS: {
      const playlist = action.payload;
      const entities = {
        ...state.entities,
        [playlist.id]: playlist
      };

      return {
        ...state,
        entities
      };
    }

    case fromPlaylists.REMOVE_PLAYLIST_SUCCESS: {
      const playlist = action.payload;
      const { [playlist.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

export const getPlaylistsEntities = (state: PlaylistState) => state.entities;
export const getPlaylistsLoaded = (state: PlaylistState) => state.loaded;
export const getPlaylistsLoading = (state: PlaylistState) => state.loading;
