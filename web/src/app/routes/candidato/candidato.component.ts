import Swal from 'sweetalert2';
import { Candidato } from './interfaces/candidato.interface';
import { CandidatoService } from './services/candidato.service';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
  PoNotificationService,
} from '@po-ui/ng-components';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
})
export class CandidatoComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public candidatos$ = this.candidatoService.listaCandidatos();

  candidatoSelecionado!: Candidato;

  mostrarModal: boolean = false;
  novoRegistro: boolean = false;
  titulo: string = '';

  readonly colunaCandidato: Array<PoTableColumn> = [
    { property: 'id', label: this.literals.candidateNumber },
    { property: 'candidate', label: this.literals.candidate },
  ];

  readonly acoes: Array<PoTableAction> = [
    {
      action: this.editarCandidato.bind(this),
      icon: 'po-icon-info',
      label: this.literals.toEdit,
    },
    {
      action: this.deletarCandidato.bind(this),
      icon: 'po-icon po-icon-delete',
      label: this.literals.toDelete,
    },
  ];

  constructor(
    private candidatoService: CandidatoService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {}

  criarCandidato() {
    this.titulo = this.literals.registerNewCandidate;
    this.novoRegistro = true;

    this.mostrarModal = true;
  }

  aoFecharModal(candidato: string) {
    this.mostrarModal = false;

    if (candidato == 'salvar') {
      this.candidatos$ = this.candidatoService.listaCandidatos();
    }
  }

  editarCandidato(candidato: Candidato) {
    this.titulo = this.literals.changeCandidate;
    this.novoRegistro = false;
    this.candidatoSelecionado = candidato;

    this.mostrarModal = true;
  }

  deletarCandidato(candidato: Candidato) {
    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteCandidate}`,
      showDenyButton: true,
      confirmButtonColor: "var(--color-blue)",
      confirmButtonText: this.literals.toDelete,
      denyButtonText: this.literals.toCancel,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.candidatoService
          .deletarCandidatos(candidato.id)
          .subscribe((r) => {
            this.candidatos$ =
              this.candidatoService.listaCandidatos();
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
