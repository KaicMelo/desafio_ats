import { CarregandoModule } from './../../componentes/carregando/carregando.module';
import { CandidatoModalModule } from './candidato-modal/candidato-modal.module';
import { CandidatoService } from './services/candidato.service';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato.component';
import { PoButtonModule, PoTableModule, PoNotificationModule, PoDividerModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    CandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    PoButtonModule,
    PoTableModule,
    CarregandoModule,
    PoNotificationModule,
    PoDividerModule,
    CandidatoModalModule
  ],
  providers:[CandidatoService]
})
export class CandidatoModule { }
