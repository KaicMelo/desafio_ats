
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PoModule, PoMenuModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { VagasModule } from './routes/vagas/vagas.module';
import { AppRoutingModule } from './app-routing.module';
import { CandidatoModule } from './routes/candidato/candidato.module';
import { CurriculoModule } from './routes/curriculo/curriculo.module';
import { ListaCandidatosModule } from './routes/lista-candidatos/lista-candidatos.module';

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
    PoMenuModule,
    VagasModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
