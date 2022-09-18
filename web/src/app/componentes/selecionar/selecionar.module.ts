import { PoFieldModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarComponent } from './selecionar.component';



@NgModule({
  declarations: [
    SelecionarComponent
  ],
  exports:[
    SelecionarComponent
  ],
  imports: [
    CommonModule,
    PoFieldModule
  ]
})
export class SelecionarModule { }
