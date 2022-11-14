import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoTableModule, PoNotificationModule, PoDividerModule } from '@po-ui/ng-components';
import { CandidatoComponent } from './candidato.component';
import { LoadingModule } from './../../components/loading/loading.module';
import { CandidatoModalModule } from './candidato-modal/candidato-modal.module';
import { CandidatoService } from './services/candidato.service';
import { CandidatoRoutingModule } from './candidato-routing.module';

@NgModule({
  declarations: [
    CandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    PoButtonModule,
    PoTableModule,
    LoadingModule,
    PoNotificationModule,
    PoDividerModule,
    CandidatoModalModule
  ],
  providers:[CandidatoService]
})
export class CandidatoModule { }
