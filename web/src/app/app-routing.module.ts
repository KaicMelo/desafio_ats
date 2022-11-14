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
      import('./routes/lista-candidatos/lista-candidatos.module').then((m) => m.ListaCandidatosModule),
  },
  {
    path: 'candidato',
    loadChildren: () =>
      import('./routes/candidato/candidato.module').then((m) => m.CandidatoModule),
  },
  {
    path: 'vagas',
    loadChildren: () =>
      import('./routes/vagas/vagas.module').then((m) => m.VagasModule),
  },
  {
    path: 'candidaturas',
    loadChildren: () =>
      import('./routes/candidatados/candidatados.module').then((m) => m.CandidatadoModule),
  },
  {
    path: 'curriculo',
    loadChildren: () =>
      import('./routes/curriculo/curriculo.module').then((m) => m.CurriculoModule),
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