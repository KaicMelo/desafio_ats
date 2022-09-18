import { CurriculoRoutingModule } from './curriculo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculoComponent } from './curriculo.component';

@NgModule({
  declarations: [
    CurriculoComponent
  ],
  imports: [
    CommonModule,
    CurriculoRoutingModule
  ]
})
export class CurriculoModule { }
