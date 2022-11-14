import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import Swal from 'sweetalert2';
import { CurriculoService } from './services/curriculo.service';
import { Resume } from './interfaces/resume.interface';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
  PoNotificationService,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  literals: Literals= LiteralsFactory.getLiterals();

  public candidatos$ = this.curriculoService.listaCurriculo();

  candidatoSelecionado!: Resume;

  mostrarModal: boolean = false;
  novoRegistro: boolean = false;

  titulo: string = '';

  readonly colunaCandidato: Array<PoTableColumn> = [
    { property: 'id', label: this.literals.candidateNumber },
    { property: 'candidate', label: this.literals.candidate },
    {
      property: 'has_resume',
      label: this.literals.resume,
      type: 'label',
      labels: [
        { value: 'true', color: 'color-11', label: this.literals.haveCV },
        { value: 'false', color: 'color-07', label: this.literals.dontHaveCV },
      ],
    },
  ];

  readonly acoes: Array<PoTableAction> = [
    {
      action: this.cadastrarCurriculo.bind(this),
      icon: 'po-icon po-icon-export',
      label: this.literals.registerCV,
    },
    {
      action: this.visualizarCurriculo.bind(this),
      icon: 'po-icon po-icon-eye',
      label: this.literals.viewCV,
    },
    {
      action: this.deletarCurriculo.bind(this),
      icon: 'po-icon po-icon-delete',
      label: this.literals.deleteCV,
    },
  ];
  constructor(
    private poNotification: PoNotificationService,
    private curriculoService: CurriculoService
  ) {}

  ngOnInit(): void {}

  cadastrarCurriculo(req: Resume) {
    if (req.has_resume == 'true') {
      this.poNotification.warning(
        this.literals.youAlreadyHaveCV
      );
      return;
    }
    this.titulo = this.literals.registerCV;
    this.candidatoSelecionado = {
      candidate_id: req.id,
      candidate: req.candidate,
    };
    this.novoRegistro = true;
    this.mostrarModal = true;
  }
  visualizarCurriculo(req: Resume) {
    if (req.has_resume == 'false') {
      this.poNotification.warning(
        this.literals.youDontHaveCV
      );
      return;
    }
    this.titulo = this.literals.changeCV;

    this.candidatoSelecionado = req;

    this.novoRegistro = false;
    this.mostrarModal = true;
  }
  deletarCurriculo(curriculo: Resume) {
    if (curriculo.has_resume == 'false') {
      this.poNotification.warning(this.literals.dontHaveCVToDelete);
      return;
    }

    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteCV}?`,
      showDenyButton: true,
      confirmButtonColor: "var(--color-blue)",
      confirmButtonText: this.literals.toDelete,
      denyButtonText: this.literals.toCancel,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.curriculoService
          .deletarCurriculo(curriculo.resume_id)
          .subscribe((r) => {
            this.candidatos$ = this.curriculoService.listaCurriculo();
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
  aoFecharModal(candidato: string) {
    this.mostrarModal = false;

    if (candidato == 'salvar') {
      this.candidatos$ = this.curriculoService.listaCurriculo();
    }
  }
}
