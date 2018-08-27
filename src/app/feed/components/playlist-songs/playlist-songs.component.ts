import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Song } from '../../models/song.model';

const PLAYLIST_SONG_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PlaylistSongsComponent),
  multi: true
};

@Component({
  selector: 'app-playlist-songs',
  providers: [PLAYLIST_SONG_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './playlist-songs.component.html',
  styleUrls: ['./playlist-songs.component.scss']
})
export class PlaylistSongsComponent implements ControlValueAccessor {
  @Input()
  songs: Song[] = [];

  value: Song[] = [];
  displayedColumns: string[] = ['add', 'name', 'artist', 'album', 'time'];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Song[]) {
    this.value = value;
  }

  selectSong(song: Song) {
    if (this.existsInSongs(song)) {
      this.value = this.value.filter(item => item.id !== song.id);
    } else {
      this.value = [...this.value, song];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInSongs(song: Song) {
    return this.value.some(val => val.id === song.id);
  }
}
