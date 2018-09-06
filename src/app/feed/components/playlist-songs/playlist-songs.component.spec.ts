import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { PlaylistSongsComponent } from './playlist-songs.component';

describe('PlaylistSongsComponent', () => {
  let component: PlaylistSongsComponent;
  let fixture: ComponentFixture<PlaylistSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistSongsComponent],
      imports: [MatTableModule, CdkTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
