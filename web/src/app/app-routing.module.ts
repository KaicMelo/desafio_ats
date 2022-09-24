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
      import('./rotas/lista-candidatos/lista-candidatos.module').then((m) => m.ListaCandidatosModule),
  },
  {
    path: 'candidato',
    loadChildren: () =>
      import('./rotas/candidato/candidato.module').then((m) => m.CandidatoModule),
  },
  {
    path: 'vagas',
    loadChildren: () =>
      import('./rotas/vagas/vagas.module').then((m) => m.VagasModule),
  },
  {
    path: 'candidaturas',
    loadChildren: () =>
      import('./rotas/candidatados/candidatados.module').then((m) => m.CandidatadoModule),
  },
  {
    path: 'curriculo',
    loadChildren: () =>
      import('./rotas/curriculo/curriculo.module').then((m) => m.CurriculoModule),
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