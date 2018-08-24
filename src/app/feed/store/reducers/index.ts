import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPhotos from './photos.reducer';
import * as fromPlaylists from './playlists.reducer';
import * as fromSongs from './songs.reducer';

export interface FeedState {
  photos: fromPhotos.PhotoState;
  playlists: fromPlaylists.PlaylistState;
  songs: fromSongs.SongState;
}

export const reducers: ActionReducerMap<FeedState> = {
  photos: fromPhotos.reducer,
  playlists: fromPlaylists.reducer,
  songs: fromSongs.reducer
};

export const getFeedState = createFeatureSelector<FeedState>('feed');
