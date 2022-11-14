import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./routes/candidate-list/candidates-list.module').then((m) => m.CandidateListModule),
  },
  {
    path: 'candidato',
    loadChildren: () =>
      import('./routes/candidate/candidate.module').then((m) => m.CandidateModule),
  },
  {
    path: 'vagas',
    loadChildren: () =>
      import('./routes/vacancies/vacancies.module').then((m) => m.VacanciesModule),
  },
  {
    path: 'candidaturas',
    loadChildren: () =>
      import('./routes/candidate-for-vacancy/candidate-for-vacancy.module').then((m) => m.CandidateForVacancyModule),
  },
  {
    path: 'curriculo',
    loadChildren: () =>
      import('./routes/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: '**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}