import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-playlist-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss']
})
export class PlaylistItemComponent implements OnInit {
  @Input()
  playlist: any;

  constructor() {}

  ngOnInit() {}
}
