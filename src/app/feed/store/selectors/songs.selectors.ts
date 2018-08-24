import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSongs from '../reducers/songs.reducer';

import { Song } from '../../models/song.model';

export const getSongState = createSelector(
  fromFeature.getFeedState,
  (state: fromFeature.FeedState) => state.songs
);

export const getSongsEntities = createSelector(
  getSongState,
  fromSongs.getSongsEntities
);

export const getSelectedSongs = createSelector(
  getSongState,
  fromSongs.getSelectedSongs
);

export const getAllSongs = createSelector(getSongsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getSongsLoaded = createSelector(
  getSongState,
  fromSongs.getSongsLoaded
);

export const getSongsLoading = createSelector(
  getSongState,
  fromSongs.getSongsLoading
);
