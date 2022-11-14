import { SelectModule } from './../../components/select/select.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule, PoButtonModule, PoDividerModule, PoDropdownModule, PoNotificationModule, PoWidgetModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './../../components/loading/loading.module';
import { ListaCandidatosRoutingModule } from './lista-candidatos-routing.module';
import { ListaCandidatosComponent } from './lista-candidatos.component';

@NgModule({
  declarations: [
    ListaCandidatosComponent
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
    PoDividerModule,
    SelectModule,
    ListaCandidatosRoutingModule
  ]
})
export class ListaCandidatosModule { }
