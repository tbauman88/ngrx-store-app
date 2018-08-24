import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as fromStore from '../../store';

import { Playlist } from '../../models/playlist.model';
import { Song } from '../../models/song.model';

@Component({
  selector: 'app-feed-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  playlist$: Observable<Playlist>;
  visualise$: Observable<Playlist>;
  songs$: Observable<Song[]>;

  constructor(private store: Store<fromStore.FeedState>) {}

  ngOnInit() {
    this.playlist$ = this.store.pipe(
      select(fromStore.getSelectedPlaylist),
      tap((playlist: Playlist = null) => {
        const playlistExists = !!(playlist && playlist.songs);
        const songs = playlistExists ? playlist.songs.map(song => song.id) : [];
        this.store.dispatch(new fromStore.VisualiseSongs(songs));
      })
    );
    this.songs$ = this.store.pipe(select(fromStore.getAllSongs));
    this.visualise$ = this.store.pipe(select(fromStore.getPlaylistVisualised));
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualiseSongs(event));
  }

  onCreate(event: Playlist) {
    this.store.dispatch(new fromStore.CreatePlaylist(event));
  }

  onUpdate(event: Playlist) {
    this.store.dispatch(new fromStore.UpdatePlaylist(event));
  }

  onRemove(event: Playlist) {
    const remove = window.confirm('Are you sure?');
    if (remove) this.store.dispatch(new fromStore.RemovePlaylist(event));
  }
}
