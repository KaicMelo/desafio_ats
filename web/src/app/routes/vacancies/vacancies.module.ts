import { RouterModule } from '@angular/router';
import { VacancyModalModule } from './vacancy-modal/vacancy-modal.module';
import { LoadingModule } from './../../components/loading/loading.module';
import { PoButtonModule, PoTableModule, PoDividerModule } from '@po-ui/ng-components';
import { VagasRoutingModule } from './vagas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';



@NgModule({
  declarations: [
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    PoButtonModule,
    PoTableModule,
    VacancyModalModule,
    PoDividerModule,
    LoadingModule
  ]
})
export class VacanciesModule { }
