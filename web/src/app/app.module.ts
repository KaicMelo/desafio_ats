import { CandidateModule } from './routes/candidate/candidate.module';
import { VacanciesModule } from './routes/vacancies/vacancies.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PoModule, PoMenuModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ResumeModule } from './routes/resume/resume.module';
import { CandidateListModule } from './routes/candidate-list/candidates-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    CandidateModule,
    ResumeModule,
    CandidateListModule,
    PoMenuModule,
    VacanciesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
