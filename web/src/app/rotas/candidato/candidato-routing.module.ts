import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCandidatosComponent } from '../lista-candidatos/lista-candidatos.component';
import { CandidatoComponent } from './candidato.component';

const routes: Routes = [
  {
    path: '',
    component: CandidatoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoRoutingModule {}