import LiteralsFactory, { Literals } from './i18n/literals';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  literals: Literals = LiteralsFactory.getLiterals();

  title: string = this.literals.atsChallenge;

  constructor(private router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: this.literals.candidateApplies,
      icon: 'po-icon po-icon-layers',
      shortLabel: this.literals.candidateAppliesShort,
      action: () => this.router.navigate(['inicio']),
    },
    {
      label: this.literals.candidate,
      icon: 'po-icon po-icon-user-add',
      shortLabel: this.literals.candidate,
      action: () => this.router.navigate(['candidato']),
    },
    {
      label: this.literals.vacancies,
      icon: 'po-icon po-icon-pallet-full',
      shortLabel: this.literals.vacancies,
      action: () => this.router.navigate(['vagas']),
    },
    {
      label: this.literals.nominations,
      icon: 'po-icon po-icon-list',
      shortLabel: this.literals.nominations,
      action: () => this.router.navigate(['candidaturas']),
    },
    {
      label: this.literals.resume,
      icon: 'po-icon po-icon-attach',
      shortLabel: this.literals.resume,
      action: () => this.router.navigate(['curriculo']),
    },
  ];
}
