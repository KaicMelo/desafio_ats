import { PoLoadingModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarregandoComponent } from './carregando.component';

@NgModule({
  declarations: [CarregandoComponent],
  exports: [CarregandoComponent],
  imports: [CommonModule,PoLoadingModule],
})
export class CarregandoModule {}
