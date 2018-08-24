import { PlaylistGuard } from './playlist-guard';
import { PlaylistExistsGuard } from './playlist-exists.guard';
import { SongsGuard } from './songs-guard';
import { PhotoGuard } from './photos-guard';

export const guards: any[] = [
  PlaylistGuard,
  PlaylistExistsGuard,
  SongsGuard,
  PhotoGuard
];

export * from './playlist-guard';
export * from './playlist-exists.guard';
export * from './songs-guard';
export * from './photos-guard';
