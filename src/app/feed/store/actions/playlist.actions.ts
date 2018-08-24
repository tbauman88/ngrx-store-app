import { Action } from '@ngrx/store';
import { Playlist } from '../../models/playlist.model';

// load playlists
export const LOAD_PLAYLISTS = '[Feed] Load Playlists';
export const LOAD_PLAYLISTS_FAIL = '[Feed] Load Playlists Fail';
export const LOAD_PLAYLISTS_SUCCESS = '[Feed] Load Playlists Success';

export class LoadPlaylists implements Action {
  readonly type = LOAD_PLAYLISTS;
}

export class LoadPlaylistsFail implements Action {
  readonly type = LOAD_PLAYLISTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPlaylistsSuccess implements Action {
  readonly type = LOAD_PLAYLISTS_SUCCESS;
  constructor(public payload: Playlist[]) {}
}

// create playlist
export const CREATE_PLAYLIST = '[Feed] Create Playlist';
export const CREATE_PLAYLIST_FAIL = '[Feed] Create Playlist Fail';
export const CREATE_PLAYLIST_SUCCESS = '[Feed] Create Playlist Success';

export class CreatePlaylist implements Action {
  readonly type = CREATE_PLAYLIST;
  constructor(public payload: Playlist) {}
}

export class CreatePlaylistFail implements Action {
  readonly type = CREATE_PLAYLIST_FAIL;
  constructor(public payload: any) {}
}

export class CreatePlaylistSuccess implements Action {
  readonly type = CREATE_PLAYLIST_SUCCESS;
  constructor(public payload: Playlist) {}
}

// update playlist
export const UPDATE_PLAYLIST = '[Feed] Update Playlist';
export const UPDATE_PLAYLIST_FAIL = '[Feed] Update Playlist Fail';
export const UPDATE_PLAYLIST_SUCCESS = '[Feed] Update Playlist Success';

export class UpdatePlaylist implements Action {
  readonly type = UPDATE_PLAYLIST;
  constructor(public payload: Playlist) {}
}

export class UpdatePlaylistFail implements Action {
  readonly type = UPDATE_PLAYLIST_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePlaylistSuccess implements Action {
  readonly type = UPDATE_PLAYLIST_SUCCESS;
  constructor(public payload: Playlist) {}
}

// delete playlist
export const REMOVE_PLAYLIST = '[Feed] Remove Playlist';
export const REMOVE_PLAYLIST_FAIL = '[Feed] Remove Playlist Fail';
export const REMOVE_PLAYLIST_SUCCESS = '[Feed] Remove Playlist Success';

export class RemovePlaylist implements Action {
  readonly type = REMOVE_PLAYLIST;
  constructor(public payload: Playlist) {}
}

export class RemovePlaylistFail implements Action {
  readonly type = REMOVE_PLAYLIST_FAIL;
  constructor(public payload: any) {}
}

export class RemovePlaylistSuccess implements Action {
  readonly type = REMOVE_PLAYLIST_SUCCESS;
  constructor(public payload: Playlist) {}
}

// action types
export type PlaylistsAction =
  | LoadPlaylists
  | LoadPlaylistsFail
  | LoadPlaylistsSuccess
  | CreatePlaylist
  | CreatePlaylistFail
  | CreatePlaylistSuccess
  | UpdatePlaylist
  | UpdatePlaylistFail
  | UpdatePlaylistSuccess
  | RemovePlaylist
  | RemovePlaylistFail
  | RemovePlaylistSuccess;
