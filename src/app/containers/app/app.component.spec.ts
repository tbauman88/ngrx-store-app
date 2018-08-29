import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { metaReducers } from '../../app.module';
import { reducers } from '../../store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        MatToolbarModule
      ]
    }).compileComponents();
  }));

  it('should create ', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
