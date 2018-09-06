import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { map } from 'rxjs/operators';

import { Playlist } from '../../models/playlist.model';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnChanges {
  exists = false;

  @Input()
  playlist: Playlist;
  @Input()
  songs: Song[];

  @Output()
  selected = new EventEmitter<number[]>();
  @Output()
  create = new EventEmitter<Playlist>();
  @Output()
  update = new EventEmitter<Playlist>();
  @Output()
  remove = new EventEmitter<Playlist>();

  form = this.formBuilder.group({
    name: ['', Validators.required],
    songs: [[]]
  });

  constructor(private formBuilder: FormBuilder) {}

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  ngOnChanges() {
    if (this.playlist && this.playlist.id) {
      this.exists = true;
      this.form.patchValue(this.playlist);
    }

    this.form
      .get('songs')
      .valueChanges.pipe(map(songs => songs.map((song: Song) => song.id)))
      .subscribe(value => this.selected.emit(value));
  }

  createPlaylist(form: FormGroup) {
    if (form.valid) this.create.emit(form.value);
  }

  updatePlaylist(form: FormGroup) {
    if (form.touched && form.valid) {
      this.update.emit({ ...this.playlist, ...form.value });
    }
  }

  removePlaylist(form: FormGroup) {
    this.remove.emit({ ...this.playlist, ...form.value });
  }
}
