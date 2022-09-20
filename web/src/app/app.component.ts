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
    { label: 'Inicio', action: () => this.router.navigate(['inicio']) },
    { label: 'Candidato', action: () => this.router.navigate(['candidato']) },
    { label: 'Vagas', action: () => this.router.navigate(['vagas']) },
    { label: 'Candidatados a uma vaga', action: () => this.router.navigate(['candidatados']) },
    { label: 'Curriculo', action: () => this.router.navigate(['curriculo']) },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
