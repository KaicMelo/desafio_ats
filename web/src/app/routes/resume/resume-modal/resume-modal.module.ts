import { PoDynamicModule, PoModalModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeModalComponent } from './resume-modal.component';



@NgModule({
  declarations: [
    ResumeModalComponent
  ],
  exports:[
    ResumeModalComponent
  ],
  imports: [
    CommonModule,
    PoModalModule,
    PoDynamicModule
  ]
})
export class ResumeModalModule { }
