import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule {
}