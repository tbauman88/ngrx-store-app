import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDisplayComponent } from './playlist-display.component';
import { MatTableModule } from '@angular/material';

describe('PlaylistDisplayComponent', () => {
  let component: PlaylistDisplayComponent;
  let fixture: ComponentFixture<PlaylistDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistDisplayComponent],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
