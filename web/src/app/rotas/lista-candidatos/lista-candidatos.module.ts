import { SelecionarModule } from './../../componentes/selecionar/selecionar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarregandoModule } from './../../componentes/carregando/carregando.module';
import { PoFieldModule, PoButtonModule, PoDividerModule, PoDropdownModule } from '@po-ui/ng-components';
import { ListaCandidatosRoutingModule } from './lista-candidatos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCandidatosComponent } from './lista-candidatos.component';

@NgModule({
  declarations: [
    ListaCandidatosComponent
  ],
  imports: [
    CommonModule,
    PoFieldModule,
    PoButtonModule,
    PoDividerModule,
    CarregandoModule,
    PoFieldModule,
    FormsModule,
    PoDropdownModule,
    ReactiveFormsModule,
    SelecionarModule,
    ListaCandidatosRoutingModule
  ]
})
export class ListaCandidatosModule { }
