import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Playlist } from '../models/playlist.model';

@Injectable()
export class PlaylistsService {
  constructor(private http: HttpClient) {}

  getPlaylists() {
    return this.http
      .get<Playlist[]>(`http://localhost:3000/playlists`)
      .pipe(
        catchError(
          (error: any) =>
            error.code === 404 ? throwError('Not found') : throwError(error)
        )
      );
  }

  createPlaylist(payload: Playlist): Observable<Playlist> {
    return this.http
      .post<Playlist>(`http://localhost:3000/playlists`, payload)
      .pipe(
        catchError(
          (error: any) =>
            error.code === 404 ? throwError('Not found') : throwError(error)
        )
      );
  }

  updatePlaylist(payload: Playlist): Observable<Playlist> {
    return this.http
      .put<Playlist>(`http://localhost:3000/playlists/${payload.id}`, payload)
      .pipe(
        catchError(
          (error: any) =>
            error.code === 404 ? throwError('Not found') : throwError(error)
        )
      );
  }

  removePlaylist(payload: Playlist): Observable<Playlist> {
    return this.http
      .delete<any>(`http://localhost:3000/playlists/${payload.id}`)
      .pipe(
        catchError(
          (error: any) =>
            error.code === 404 ? throwError('Not found') : throwError(error)
        )
      );
  }
}
