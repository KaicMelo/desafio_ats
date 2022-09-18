import { VagaModalModule } from './vaga-modal/vaga-modal.module';
import { CarregandoModule } from './../../componentes/carregando/carregando.module';
import { PoButtonModule, PoTableModule } from '@po-ui/ng-components';
import { VagasRoutingModule } from './vagas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas.component';

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
    CarregandoModule
  ]
})
export class VagasModule { }
