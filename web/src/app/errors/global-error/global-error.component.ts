import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Component } from '@angular/core';

@Component({
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent {
  literals: Literals = LiteralsFactory.getLiterals();
}
