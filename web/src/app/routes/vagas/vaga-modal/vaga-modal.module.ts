import { FormsModule } from '@angular/forms';
import { PoNotificationModule, PoModalModule, PoFieldModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaModalComponent } from './vaga-modal.component';



@NgModule({
  declarations: [
    VagaModalComponent
  ],
  exports:[
    VagaModalComponent
  ],
  imports: [
    CommonModule,
    PoModalModule,
    PoFieldModule,
    FormsModule,
    PoNotificationModule
  ]
})
export class VagaModalModule { }
