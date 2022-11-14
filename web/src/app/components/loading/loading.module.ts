import { PoLoadingModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports:[
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PoLoadingModule
  ]
})

export class LoadingModule { }