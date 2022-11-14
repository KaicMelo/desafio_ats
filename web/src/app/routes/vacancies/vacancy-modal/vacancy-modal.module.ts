import { FormsModule } from '@angular/forms';
import { PoNotificationModule, PoModalModule, PoFieldModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyModalComponent } from './vacancy-modal.component';



@NgModule({
  declarations: [
    VacancyModalComponent
  ],
  exports:[
    VacancyModalComponent
  ],
  imports: [
    CommonModule,
    PoModalModule,
    PoFieldModule,
    FormsModule,
    PoNotificationModule
  ]
})
export class VacancyModalModule { }
