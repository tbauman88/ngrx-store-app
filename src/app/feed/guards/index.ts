import { PlaylistGuard } from './playlist-guard';
import { PlaylistExistsGuard } from './playlist-exists.guard';
import { PhotoGuard } from './photos-guard';

export const guards: any[] = [PlaylistGuard, PlaylistExistsGuard, PhotoGuard];

export * from './playlist-guard';
export * from './playlist-exists.guard';
export * from './photos-guard';
