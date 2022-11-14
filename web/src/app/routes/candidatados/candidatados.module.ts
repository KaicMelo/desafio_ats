import { PoWidgetModule, PoDividerModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CandidatadosComponent } from './candidatados.component';
import { CandidatadosRoutingModule } from './candidato-routing.module';
import { LoadingModule } from './../../components/loading/loading.module';


@NgModule({
  declarations: [
    CandidatadosComponent
  ],
  imports: [
    CommonModule,
    CandidatadosRoutingModule,
    HttpClientModule,
    LoadingModule,
    PoDividerModule,
    PoWidgetModule
  ]
})
export class CandidatadoModule { }
