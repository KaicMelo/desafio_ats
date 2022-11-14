import { PoWidgetModule, PoDividerModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CandidateForVacancyComponent } from './candidate-for-vacancy.component';
import { CandidateForVacancyRoutingModule } from './candidato-routing.module';
import { LoadingModule } from '../../components/loading/loading.module';


@NgModule({
  declarations: [
    CandidateForVacancyComponent
  ],
  imports: [
    CommonModule,
    CandidateForVacancyRoutingModule,
    HttpClientModule,
    LoadingModule,
    PoDividerModule,
    PoWidgetModule
  ]
})
export class CandidateForVacancyModule { }
