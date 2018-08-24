import { CardComponent } from './card/card.component';
import { PlaylistDisplayComponent } from './playlist-display/playlist-display.component';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { PlaylistSongsComponent } from './playlist-songs/playlist-songs.component';

export const components: any[] = [
  CardComponent,
  PlaylistDisplayComponent,
  PlaylistFormComponent,
  PlaylistItemComponent,
  PlaylistSongsComponent
];

export * from './card/card.component';
export * from './playlist-display/playlist-display.component';
export * from './playlist-form/playlist-form.component';
export * from './playlist-item/playlist-item.component';
export * from './playlist-songs/playlist-songs.component';
