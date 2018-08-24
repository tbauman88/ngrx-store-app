import { Action } from '@ngrx/store';
import { Song } from '../../models/song.model';

// load songs
export const LOAD_SONGS = '[Feed] Load Songs';
export const LOAD_SONGS_FAIL = '[Feed] Load Songs Fail';
export const LOAD_SONGS_SUCCESS = '[Feed] Load Songs Success';
export const VISUALISE_SONGS = '[Feed] Visualise Songs';

export class LoadSongs implements Action {
  readonly type = LOAD_SONGS;
}

export class LoadSongsFail implements Action {
  readonly type = LOAD_SONGS_FAIL;
  constructor(public paylod: any) {}
}

export class LoadSongsSuccess implements Action {
  readonly type = LOAD_SONGS_SUCCESS;
  constructor(public payload: Song[]) {}
}

export class VisualiseSongs implements Action {
  readonly type = VISUALISE_SONGS;
  constructor(public payload: number[]) {}
}

export type SongsActions =
  | LoadSongs
  | LoadSongsFail
  | LoadSongsSuccess
  | VisualiseSongs;
