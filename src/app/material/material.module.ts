import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatIconRegistry
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

export const components: any[] = [
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatIconModule,
  CdkTableModule
];

@NgModule({
  imports: [components],
  exports: [components],
  providers: [MatIconRegistry]
})
export class MaterialModule {}
