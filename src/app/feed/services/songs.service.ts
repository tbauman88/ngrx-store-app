import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Song } from '../models/song.model';

@Injectable()
export class SongsService {
  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    console.log('service');

    return this.http
      .get<Song[]>(`http://localhost:3000/songs`)
      .pipe(
        catchError(
          (error: any) =>
            error.code === 404 ? throwError('Not found') : throwError(error)
        )
      );
  }
}
