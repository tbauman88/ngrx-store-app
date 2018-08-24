import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Photos } from '../models/photos.model';

@Injectable()
export class PhotosService {
  unsplash_api: string = 'https://api.unsplash.com/photos';

  constructor(private http: HttpClient) {}

  getPhotos() {
    const headers = new HttpHeaders().append(
      'Authorization',
      environment.UNSPLASH_API_ID
    );
    let params = new HttpParams();
    (params = params.append('per_page', '12')),
      (params = params.append('order_by', 'popular'));

    return this.http
      .get<Photos[]>(this.unsplash_api, { headers, params })
      .pipe(
        catchError(
          (error: any) =>
            error.code === 404 ? throwError(error) : throwError(error)
        )
      );
  }
}
