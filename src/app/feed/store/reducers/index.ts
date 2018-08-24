import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPhotos from './photos.reducer';
import * as fromPlaylists from './playlists.reducer';

export interface FeedState {
  photos: fromPhotos.PhotoState;
  playlists: fromPlaylists.PlaylistState;
}

export const reducers: ActionReducerMap<FeedState> = {
  photos: fromPhotos.reducer,
  playlists: fromPlaylists.reducer
};

export const getFeedState = createFeatureSelector<FeedState>('feed');
