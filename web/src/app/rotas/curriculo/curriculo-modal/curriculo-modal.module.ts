import { PoDynamicModule, PoModalModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoModalComponent } from './curriculo-modal.component';



@NgModule({
  declarations: [
    CurriculoModalComponent
  ],
  exports:[
    CurriculoModalComponent
  ],
  imports: [
    CommonModule,
    PoModalModule,
    PoDynamicModule
  ]
})
export class CurriculoModalModule { }
