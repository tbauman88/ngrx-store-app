import { PlaylistsService } from './playlists.service';
import { PhotosService } from './photos.service';
import { SongsService } from './songs.service';

export const services: any[] = [PlaylistsService, SongsService, PhotosService];

export * from './playlists.service';
export * from './songs.service';
export * from './photos.service';
