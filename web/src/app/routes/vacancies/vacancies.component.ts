import { VacanciesService } from './services/vacancies.service';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Vacancies } from './interfaces/vacancies.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public vagas$ = this.vacanciesService.listVacancies();

  VagaSelecionada!: Vacancies;

  mostrarModal: boolean = false;
  novoRegistro: boolean = false;

  titulo: string = '';

  readonly colunaVaga: Array<PoTableColumn> = [
    { property: 'id', label: this.literals.vacancyNumber },
    { property: 'vacancy', label: this.literals.vacancies }
  ];

  readonly acoes: Array<PoTableAction> = [
    {
      action: this.editarVaga.bind(this),
      icon: 'po-icon-info',
      label: this.literals.toEdit,
    },
    {
      action: this.deletarVaga.bind(this),
      icon: 'po-icon po-icon-delete',
      label: this.literals.toDelete,
    },
  ];

  constructor(
    private vacanciesService: VacanciesService,
  ) {}

  ngOnInit(): void {}
  criarVagas() {
    this.titulo = this.literals.registerNewVacancy;
    this.novoRegistro = true;

    this.mostrarModal = true;
  }
  
  aoFecharModal(candidato: string) {
    this.mostrarModal = false;

    if (candidato == 'salvar') {
      this.vagas$ = this.vacanciesService.listVacancies();
    }
  }
  editarVaga(vagas: Vacancies) {
    this.titulo = this.literals.changeVacancy;
    this.VagaSelecionada = vagas;
    this.novoRegistro = false;

    this.mostrarModal = true;
  }
  deletarVaga(vagas: Vacancies) {
    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteVacancy}?`,
      showDenyButton: true,
      confirmButtonText: this.literals.toDelete,
      confirmButtonColor: "var(--color-blue)",
      denyButtonText: this.literals.toCancel,
    }).then((result) => {
      if (result.isConfirmed) {
        this.vacanciesService
          .deleteVacancies(vagas.id)
          .subscribe((r) => {
            this.vagas$ =
              this.vacanciesService.listVacancies();
              Swal.fire({
                confirmButtonColor: "var(--color-blue)",
                icon: 'success',
                title: this.literals.deleted,
                timer: 2000
              });
          });
      }
    });
  }
}
