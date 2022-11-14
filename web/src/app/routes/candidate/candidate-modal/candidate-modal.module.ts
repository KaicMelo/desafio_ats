import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateModalComponent } from './candidate-modal.component';
import { PoFieldModule, PoModalModule, PoNotificationModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CandidateModalComponent
  ],
  exports:[
    CandidateModalComponent
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
