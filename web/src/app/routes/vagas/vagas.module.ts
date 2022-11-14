import { PoButtonModule, PoTableModule, PoDividerModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasRoutingModule } from './vagas-routing.module';
import { VagasComponent } from './vagas.component';
import { LoadingModule } from './../../components/loading/loading.module';
import { VagaModalModule } from './vaga-modal/vaga-modal.module';

@NgModule({
  declarations: [
    VagasComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    PoButtonModule,
    PoTableModule,
    VagaModalModule,
    PoDividerModule,
    LoadingModule
  ]
})
export class VagasModule { }
