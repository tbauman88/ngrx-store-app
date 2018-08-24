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

export const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.PlaylistGuard, fromGuards.PhotoGuard],
    component: fromContainers.FeedComponent
  },
  {
    path: 'new',
    canActivate: [fromGuards.PlaylistGuard, fromGuards.SongsGuard],
    component: fromContainers.FeedItemComponent
  },
  {
    path: ':playlistId',
    canActivate: [fromGuards.PlaylistExistsGuard, fromGuards.SongsGuard],
    component: fromContainers.FeedItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
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
