import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  literals: Literals = LiteralsFactory.getLiterals();

  @Input() options: any;
  @Input() label: string = '';
  @Output() formValue: any = new EventEmitter();

  constructor() {}

  onChange(event: any) {
    this.formValue.emit(event);
  }
}
