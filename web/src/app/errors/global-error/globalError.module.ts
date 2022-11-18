import { GlobalErrorRoutingModule } from './global-error-routing.module';
import { GlobalErrorComponent } from './global-error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GlobalErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalErrorRoutingModule
  ]
})
export class GlobalErrorModule { }
