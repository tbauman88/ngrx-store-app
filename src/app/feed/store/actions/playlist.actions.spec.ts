import * as fromPlaylists from './playlist.actions';

describe('Playlists Actions', () => {
  describe('LoadPlaylists Actions', () => {
    describe('LoadPlaylists', () => {
      it('should create an action', () => {
        const action = new fromPlaylists.LoadPlaylists();

        expect({ ...action }).toEqual({
          type: fromPlaylists.LOAD_PLAYLISTS
        });
      });
    });

    describe('LoadPlaylistsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromPlaylists.LoadPlaylistsFail(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.LOAD_PLAYLISTS_FAIL,
          payload
        });
      });
    });

    describe('LoadPlaylistsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            name: 'Country on the Radio',
            image: 'https://picsum.photos/300?image=16',
            songs: [
              {
                id: 2,
                name: 'Tequila',
                time: '3:16',
                artist: 'Dan + Shay',
                album: 'Dan + Shay'
              },
              {
                id: 6,
                name: 'All Of It',
                time: '3:38',
                artist: 'Cole Swindell',
                album: 'All Of It'
              },
              {
                id: 7,
                name: "I Don't Know About You",
                time: '3:28',
                artist: 'Chris Lane',
                album: 'Laps Around The Sun'
              },
              {
                id: 8,
                name: 'Feathered Indians',
                time: '3:45',
                artist: 'Tyler Childers',
                album: 'Purgatory'
              }
            ],
            id: 1
          }
        ];
        const action = new fromPlaylists.LoadPlaylistsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.LOAD_PLAYLISTS_SUCCESS,
          payload
        });
      });
    });
  });

  describe('CreatePlaylist Actions', () => {
    describe('CreatePlaylist', () => {
      it('should create an action', () => {
        const payload = {
          name: 'Hot Playlist',
          image: 'https://picsum.photos/300?image=16',
          songs: [
            {
              id: 1,
              name: 'In My Feelings',
              time: '3:57',
              artist: 'Drake',
              album: 'Scorpion'
            },
            {
              id: 3,
              name: 'Girls Like You',
              time: '3:55',
              artist: 'Maroon 5, Cardi B',
              album: 'Red Pills Blues'
            }
          ]
        };
        const action = new fromPlaylists.CreatePlaylist(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.CREATE_PLAYLIST,
          payload
        });
      });
    });

    describe('CreatePlaylistFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Create Error' };
        const action = new fromPlaylists.CreatePlaylistFail(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.CREATE_PLAYLIST_FAIL,
          payload
        });
      });
    });

    describe('CreatePlaylistSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 3,
          name: 'Hot Playlist',
          image: 'https://picsum.photos/300?image=16',
          songs: [
            {
              id: 1,
              name: 'In My Feelings',
              time: '3:57',
              artist: 'Drake',
              album: 'Scorpion'
            },
            {
              id: 3,
              name: 'Girls Like You',
              time: '3:55',
              artist: 'Maroon 5, Cardi B',
              album: 'Red Pills Blues'
            }
          ]
        };
        const action = new fromPlaylists.CreatePlaylistSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.CREATE_PLAYLIST_SUCCESS,
          payload
        });
      });
    });
  });

  describe('UpdatePlaylist Actions', () => {
    describe('UpdatePlaylist', () => {
      it('should create an action', () => {
        const payload = {
          id: 3,
          name: 'Hot Playlist',
          image: 'https://picsum.photos/300?image=16',
          songs: [
            {
              id: 1,
              name: 'In My Feelings',
              time: '3:57',
              artist: 'Drake',
              album: 'Scorpion'
            },
            {
              id: 3,
              name: 'Girls Like You',
              time: '3:55',
              artist: 'Maroon 5, Cardi B',
              album: 'Red Pills Blues'
            }
          ]
        };
        const action = new fromPlaylists.UpdatePlaylist(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.UPDATE_PLAYLIST,
          payload
        });
      });
    });

    describe('UpdatePlaylistFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Update Error' };
        const action = new fromPlaylists.UpdatePlaylistFail(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.UPDATE_PLAYLIST_FAIL,
          payload
        });
      });
    });

    describe('UpdatePlaylistSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 3,
          name: 'Hot Playlist',
          image: 'https://picsum.photos/300?image=16',
          songs: [
            {
              id: 1,
              name: 'In My Feelings',
              time: '3:57',
              artist: 'Drake',
              album: 'Scorpion'
            },
            {
              id: 3,
              name: 'Girls Like You',
              time: '3:55',
              artist: 'Maroon 5, Cardi B',
              album: 'Red Pills Blues'
            }
          ]
        };
        const action = new fromPlaylists.UpdatePlaylistSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.UPDATE_PLAYLIST_SUCCESS,
          payload
        });
      });
    });
  });

  describe('RemovePlaylist Actions', () => {
    describe('RemovePlaylist', () => {
      it('should create an action', () => {
        const payload = {
          id: 3,
          name: 'Hot Playlist',
          image: 'https://picsum.photos/300?image=16',
          songs: [
            {
              id: 1,
              name: 'In My Feelings',
              time: '3:57',
              artist: 'Drake',
              album: 'Scorpion'
            },
            {
              id: 3,
              name: 'Girls Like You',
              time: '3:55',
              artist: 'Maroon 5, Cardi B',
              album: 'Red Pills Blues'
            }
          ]
        };
        const action = new fromPlaylists.RemovePlaylist(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.REMOVE_PLAYLIST,
          payload
        });
      });
    });

    describe('RemovePlaylistFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Remove Error' };
        const action = new fromPlaylists.RemovePlaylistFail(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.REMOVE_PLAYLIST_FAIL,
          payload
        });
      });
    });

    describe('RemovePlaylistSuccess', () => {
      it('should create an action', () => {
        const payload = {
          id: 3,
          name: 'Hot Playlist',
          image: 'https://picsum.photos/300?image=16',
          songs: [
            {
              id: 1,
              name: 'In My Feelings',
              time: '3:57',
              artist: 'Drake',
              album: 'Scorpion'
            },
            {
              id: 3,
              name: 'Girls Like You',
              time: '3:55',
              artist: 'Maroon 5, Cardi B',
              album: 'Red Pills Blues'
            }
          ]
        };
        const action = new fromPlaylists.RemovePlaylistSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromPlaylists.REMOVE_PLAYLIST_SUCCESS,
          payload
        });
      });
    });
  });
});
