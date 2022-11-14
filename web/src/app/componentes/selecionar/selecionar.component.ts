import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecionar',
  templateUrl: './selecionar.component.html',
  styleUrls: ['./selecionar.component.css'],
})
export class SelecionarComponent {
  literals: Literals = LiteralsFactory.getLiterals();

  @Input() vagas: any;
  @Input() label: string = '';
  @Output() valorFormulario: any = new EventEmitter();

  constructor() {}

  onChange(event: any) {
    this.valorFormulario.emit(event);
  }
}
