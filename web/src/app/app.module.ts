
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { VagasModule } from './rotas/vagas/vagas.module';
import { AppRoutingModule } from './app-routing.module';
import { CandidatoModule } from './rotas/candidato/candidato.module';
import { CurriculoModule } from './rotas/curriculo/curriculo.module';
import { ListaCandidatosModule } from './rotas/lista-candidatos/lista-candidatos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    CandidatoModule,
    CurriculoModule,
    ListaCandidatosModule,
    VagasModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
