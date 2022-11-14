import { Literals } from './../../i18n/literals';
import Swal from 'sweetalert2';
import {
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { VagasService } from './services/vagas.service';
import { Component, OnInit } from '@angular/core';
import { Vagas } from './interfaces/vagas.interface';
import LiteralsFactory from 'src/app/i18n/literals';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public vagas$ = this.vagasService.listaVagas();

  VagaSelecionada!: Vagas;

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
    private vagasService: VagasService,
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
      this.vagas$ = this.vagasService.listaVagas();
    }
  }
  editarVaga(vagas: Vagas) {
    this.titulo = this.literals.changeVacancy;
    this.VagaSelecionada = vagas;
    this.novoRegistro = false;

    this.mostrarModal = true;
  }
  deletarVaga(vagas: Vagas) {
    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteVacancy}?`,
      showDenyButton: true,
      confirmButtonText: this.literals.toDelete,
      confirmButtonColor: "var(--color-blue)",
      denyButtonText: this.literals.toCancel,
    }).then((result) => {
      if (result.isConfirmed) {
        this.vagasService
          .deletarVagas(vagas.id)
          .subscribe((r) => {
            this.vagas$ =
              this.vagasService.listaVagas();
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
