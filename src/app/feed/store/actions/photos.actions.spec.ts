import * as fromPhotos from './photos.actions';

describe('Photos Actions', () => {
  describe('LoadPhotos Actions', () => {
    describe('LoadPhotos', () => {
      it('should create an action', () => {
        const action = new fromPhotos.LoadPhotos();

        expect({ ...action }).toEqual({
          type: fromPhotos.LOAD_PHOTOS
        });
      });
    });

    describe('LoadPhotosFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPhotos.LoadPhotosFail(payload);

        expect({ ...action }).toEqual({
          type: fromPhotos.LOAD_PHOTOS_FAIL,
          payload
        });
      });
    });

    describe('LoadPhotosSuccess', () => {
      it('should create an action', () => {
        const payload = [];
        const action = new fromPhotos.LoadPhotosSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPhotos.LOAD_PHOTOS_SUCCESS,
          payload
        });
      });
    });
  });
});
