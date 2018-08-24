import { Song } from './song.model';

export interface Playlist {
  id?: number;
  name?: string;
  image?: string;
  songs?: Song[];
}
