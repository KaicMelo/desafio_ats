import { HttpClientModule } from '@angular/common/http';
import { CurriculoModalModule } from './curriculo-modal/curriculo-modal.module';
import { CarregandoModule } from './../../componentes/carregando/carregando.module';
import { PoTableModule, PoNotificationModule } from '@po-ui/ng-components';
import { CurriculoRoutingModule } from './curriculo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo.component';

@NgModule({
  declarations: [
    CurriculoComponent
  ],
  imports: [
    CommonModule,
    CurriculoRoutingModule,
    PoTableModule,
    CarregandoModule,
    CurriculoModalModule,
    HttpClientModule,
    PoNotificationModule
  ]
})
export class CurriculoModule { }
