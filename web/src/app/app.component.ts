import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Desafio ATS';

  constructor(private router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Candidato se candidata',
      icon:'po-icon-home',
      shortLabel: 'Se Candidato',
      action: () => this.router.navigate(['inicio']),
    },
    {
      label: 'Candidato',
      icon: 'po-icon-clock',
      shortLabel: 'Se Candidato',
      action: () => this.router.navigate(['candidato']),
    },
    { label: 'Vagas', action: () => this.router.navigate(['vagas']) },
    {
      label: 'Candidaturas',
      icon: 'po-icon-clock',
      shortLabel: 'Se Candidato',
      action: () => this.router.navigate(['candidaturas']),
    },
    {
      label: 'Currículo',
      icon: 'po-icon-clock',
      shortLabel: 'Se Candidato',
      action: () => this.router.navigate(['curriculo']),
    },
  ];
}
