import { PoWidgetModule, PoDividerModule } from '@po-ui/ng-components';
import { CarregandoModule } from './../../componentes/carregando/carregando.module';
import { CandidatadosRoutingModule } from './candidato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatadosComponent } from './candidatados.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CandidatadosComponent
  ],
  imports: [
    CommonModule,
    CandidatadosRoutingModule,
    HttpClientModule,
    CarregandoModule,
    PoDividerModule,
    PoWidgetModule
  ]
})
export class CandidatadoModule { }
