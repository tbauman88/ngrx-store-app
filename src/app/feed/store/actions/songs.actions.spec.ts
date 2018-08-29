import * as fromSongs from './songs.actions';

describe('Toppings Actions', () => {
  describe('LoadSongs Actions', () => {
    describe('LoadSongs', () => {
      it('should create an action', () => {
        const action = new fromSongs.LoadSongs();

        expect({ ...action }).toEqual({
          type: fromSongs.LOAD_SONGS
        });
      });
    });

    describe('LoadSongsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromSongs.LoadSongsFail(payload);

        expect({ ...action }).toEqual({
          type: fromSongs.LOAD_SONGS_FAIL,
          paylod: payload
        });
      });
    });

    describe('LoadSongsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            id: 3,
            name: 'Girls Like You',
            time: '3:55',
            artist: 'Maroon 5, Cardi B',
            album: 'Red Pills Blues'
          },
          {
            id: 4,
            name: 'No Brainer',
            time: '4:20',
            artist: 'DJ Khaled, Hystin Bieber, Quavo, Chance the Rapper',
            album: 'No Brainer'
          },
          {
            id: 5,
            name: 'Freaky Friday',
            time: '3:36',
            artist: 'Lil Dicky, Chris Brown',
            album: 'Freaky Friday'
          }
        ];
        const action = new fromSongs.LoadSongsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromSongs.LOAD_SONGS_SUCCESS,
          payload
        });
      });
    });
  });

  describe('VisualiseSongs Actions', () => {
    describe('VisualiseSongs', () => {
      it('should create an action', () => {
        const action = new fromSongs.VisualiseSongs([1, 2, 3]);

        expect({ ...action }).toEqual({
          type: fromSongs.VISUALISE_SONGS,
          payload: [1, 2, 3]
        });
      });
    });
  });
});
