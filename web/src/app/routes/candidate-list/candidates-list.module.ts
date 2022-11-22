import { CandidateListRoutingModule } from './candidates-list-routing.module';
import { SelectModule } from './../../components/select/select.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule, PoButtonModule, PoDividerModule, PoDropdownModule, PoNotificationModule, PoWidgetModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './../../components/loading/loading.module';
import { CandidateListComponent } from './candidates-list.component';

@NgModule({
  declarations: [
    CandidateListComponent
  ],
  imports: [
    CommonModule,
    PoFieldModule,
    PoButtonModule,
    PoDividerModule,
    LoadingModule,
    PoFieldModule,
    FormsModule,
    PoDropdownModule,
    ReactiveFormsModule,
    PoNotificationModule,
    PoWidgetModule,
    SelectModule,
    CandidateListRoutingModule
  ]
})
export class CandidateListModule { }
