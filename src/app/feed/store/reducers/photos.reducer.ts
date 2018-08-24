import * as fromPhotos from '../actions/photos.actions';
import { Photos } from '../../models/photos.model';

export interface PhotoState {
  entities: { [id: string]: Photos };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PhotoState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPhotos.PhotosActions
): PhotoState {
  switch (action.type) {
    case fromPhotos.LOAD_PHOTOS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPhotos.LOAD_PHOTOS_SUCCESS: {
      const photos = action.payload;

      console.log(photos);

      const entities = photos.reduce(
        (entities: { [id: string]: Photos }, photo: Photos) => {
          return {
            ...entities,
            [photo.id]: photo
          };
        },
        {
          ...state.entities
        }
      );

      console.log(entities);

      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }

    case fromPhotos.LOAD_PHOTOS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }

  return state;
}

export const getPhotosEntities = (state: PhotoState) => state.entities;
export const getPhotosLoaded = (state: PhotoState) => state.loaded;
export const getPhotosLoading = (state: PhotoState) => state.loading;
