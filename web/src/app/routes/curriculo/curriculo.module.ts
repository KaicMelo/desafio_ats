import { LoadingModule } from './../../components/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';
import { CurriculoModalModule } from './curriculo-modal/curriculo-modal.module';
import { PoTableModule, PoNotificationModule, PoDividerModule } from '@po-ui/ng-components';
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
    LoadingModule,
    CurriculoModalModule,
    HttpClientModule,
    PoDividerModule,
    PoNotificationModule
  ]
})
export class CurriculoModule { }
