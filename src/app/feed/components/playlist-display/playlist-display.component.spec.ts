import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { PlaylistDisplayComponent } from './playlist-display.component';

describe('PlaylistDisplayComponent', () => {
  let component: PlaylistDisplayComponent;
  let fixture: ComponentFixture<PlaylistDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistDisplayComponent],
      imports: [MatTableModule, CdkTableModule]
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
