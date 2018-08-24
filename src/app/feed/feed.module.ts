import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromGuards from './guards';
import * as fromServices from './services';

import { MaterialModule } from '../material/material.module';

export const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.PhotoGuard],
    component: fromContainers.FeedComponent
  },
  {
    path: ':photoId'
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class FeedModule {}
