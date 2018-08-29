import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers, select } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors/photo.selectors';

import { Photos } from '../../models/photos.model';

describe('Photos Selectors', () => {
  let store: Store<fromReducers.FeedState>;

  const photos: Photos[] = [];

  const entities = {
    1: photos[0],
    2: photos[1],
    3: photos[2]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          products: combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getPhotosEntities', () => {
    it('should return photos as entities', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPhotosEntities))
        .subscribe(value => (result = value));

      expect(result).toEqual({});

      store.dispatch(new fromActions.LoadPhotosSuccess(photos));
      expect(result).toEqual(entities);
    });
  });

  describe('getAllPhotos', () => {
    it('should return photos as an array', () => {
      let result;

      store
        .pipe(select(fromSelectors.getAllPhotos))
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new fromActions.LoadPhotosSuccess(photos));

      expect(result).toEqual(photos);
    });
  });

  describe('getPhotoLoaded', () => {
    it('should return photos loaded state', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPhotoLoaded))
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadPhotosSuccess([]));

      expect(result).toEqual(true);
    });
  });

  describe('getPhotoLoading', () => {
    it('should return photos loading state', () => {
      let result;

      store
        .pipe(select(fromSelectors.getPhotoLoading))
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadPhotos());

      expect(result).toEqual(true);
    });
  });
});
