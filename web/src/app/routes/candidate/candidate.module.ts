import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoTableModule, PoNotificationModule, PoDividerModule } from '@po-ui/ng-components';
import { CandidateComponent } from './candidate.component';
import { LoadingModule } from '../../components/loading/loading.module';
import { CandidatoModalModule } from './candidate-modal/candidate-modal.module';
import { CandidateService } from './services/candidate.service';
import { CandidateRoutingModule } from './candidate-routing.module';

@NgModule({
  declarations: [
    CandidateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    PoButtonModule,
    PoTableModule,
    LoadingModule,
    PoNotificationModule,
    PoDividerModule,
    CandidatoModalModule
  ],
  providers:[CandidateService]
})
export class CandidateModule { }
