import { Component, Input, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

import { Playlist } from '../../models/playlist.model';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate(
      '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(0)', opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(-200px)', opacity: 0 })
    )
  ])
]);

@Component({
  selector: 'app-playlist-display',
  animations: [DROP_ANIMATION],
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.scss']
})
export class PlaylistDisplayComponent implements OnInit {
  @Input()
  playlist: Playlist;

  constructor() {}

  ngOnInit() {}
}
