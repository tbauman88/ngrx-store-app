import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromPlaylists from '../reducers/playlists.reducer';

import { Playlist } from '../../models/playlist.model';

export const getPlaylistState = createSelector(
  fromFeature.getFeedState,
  (state: fromFeature.FeedState) => state.playlists
);

export const getPlaylistEntities = createSelector(
  getPlaylistState,
  fromPlaylists.getPlaylistsEntities
);

export const getSelectedPlaylist = createSelector(
  getPlaylistEntities,
  fromRoot.getRouterState,
  (entities, router): Playlist => {
    return router.state && entities[router.state.params.photoId];
  }
);

export const getAllPlaylists = createSelector(getPlaylistEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getPlaylistLoaded = createSelector(
  getPlaylistState,
  fromPlaylists.getPlaylistsLoaded
);

export const getPlaylistLoading = createSelector(
  getPlaylistState,
  fromPlaylists.getPlaylistsLoading
);
