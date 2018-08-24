import { Action } from '@ngrx/store';
import { Photos } from '../../models/photos.model';

// load unsplash photos
export const LOAD_PHOTOS = '[Unsplash API] Load Photos';
export const LOAD_PHOTOS_FAIL = '[Unsplash API] Load Photos Fail';
export const LOAD_PHOTOS_SUCCESS = '[Unsplash API] Load Photos Success';

export class LoadPhotos implements Action {
  readonly type = LOAD_PHOTOS;
}

export class LoadPhotosFail implements Action {
  readonly type = LOAD_PHOTOS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPhotosSuccess implements Action {
  readonly type = LOAD_PHOTOS_SUCCESS;
  constructor(public payload: Photos[]) {}
}

// action types
export type PhotosActions = LoadPhotos | LoadPhotosFail | LoadPhotosSuccess;
