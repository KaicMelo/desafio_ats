import { CarregandoModule } from './../../componentes/carregando/carregando.module';
import { CandidatoModalModule } from './candidato-modal/candidato-modal.module';
import { CandidatoService } from './services/candidato.service';
import { CandidatoRoutingModule } from './candidato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatoComponent } from './candidato.component';
import { PageFilterModule } from 'src/app/componentes/page-filter/page-filter.module';
import { PoButtonModule, PoTableModule, PoNotificationModule, PoDividerModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    CandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    PageFilterModule,
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
