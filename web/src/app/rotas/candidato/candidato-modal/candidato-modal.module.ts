import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoModalComponent } from './candidato-modal.component';
import { PoFieldModule, PoModalModule, PoNotificationModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CandidatoModalComponent
  ],
  exports:[
    CandidatoModalComponent
  ],
  imports: [
    CommonModule,
    PoModalModule,
    PoFieldModule,
    FormsModule,
    PoNotificationModule
  ]
})
export class CandidatoModalModule { }
