import Swal from 'sweetalert2';
import { CurriculoService } from './services/curriculo.service';
import { Curriculo } from './interfaces/curriculo.interface';
import { CandidatoService } from './../candidato/services/candidato.service';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
  PoNotificationService,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css'],
})
export class CurriculoComponent implements OnInit {
  public candidatos$ = this.curriculoService.listaCurriculo();

  candidatoSelecionado!: Curriculo;

  mostrarModal: boolean = false;
  novoRegistro: boolean = false;

  titulo: string = '';

  readonly colunaCandidato: Array<PoTableColumn> = [
    { property: 'id', label: 'Numero do Candidato' },
    { property: 'candidate', label: 'Candidato' },
    {
      property: 'has_resume',
      label: 'Currículo',
      type: 'label',
      labels: [
        { value: 'true', color: 'color-11', label: 'Tem Currículo' },
        { value: 'false', color: 'color-07', label: 'Não tem Currículo' },
      ],
    },
  ];

  readonly acoes: Array<PoTableAction> = [
    {
      action: this.cadastrarCurriculo.bind(this),
      icon: 'po-icon po-icon-export',
      label: 'Cadastrar Curriculo',
    },
    {
      action: this.visualizarCurriculo.bind(this),
      icon: 'po-icon po-icon-eye',
      label: 'Visualizar Curriculo',
    },
    {
      action: this.deletarCurriculo.bind(this),
      icon: 'po-icon po-icon-delete',
      label: 'Deletar Curriculo',
    },
  ];
  constructor(
    private poNotification: PoNotificationService,
    private curriculoService: CurriculoService
  ) {}

  ngOnInit(): void {}

  cadastrarCurriculo(req: Curriculo) {
    if (req.has_resume == 'true') {
      this.poNotification.warning(
        'Voçê já possui currículo. Clique em visualizar currículo'
      );
      return;
    }
    this.titulo = 'Cadastrar Currículo';
    this.candidatoSelecionado = {
      candidate_id: req.id,
      candidate: req.candidate,
    };
    this.novoRegistro = true;
    this.mostrarModal = true;
  }
  visualizarCurriculo(req: Curriculo) {
    if (req.has_resume == 'false') {
      this.poNotification.warning(
        'Voçê já não possui currículo. Clique em cadastrar currículo'
      );
      return;
    }
    this.titulo = 'Alterar Currículo';

    this.candidatoSelecionado = req;

    this.novoRegistro = false;
    this.mostrarModal = true;
  }
  deletarCurriculo(curriculo: Curriculo) {
    if (curriculo.has_resume == 'false') {
      this.poNotification.warning('Voçê não possui currículo para deletar');
      return;
    }

    Swal.fire({
      title: 'Gostaria de deletar Curriculo?',
      showDenyButton: true,
      confirmButtonText: 'Deletar',
      denyButtonText: 'Cancelar',
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.curriculoService
          .deletarCurriculo(curriculo.resume_id)
          .subscribe((r) => {
            this.candidatos$ = this.curriculoService.listaCurriculo();
            Swal.fire('Deletado', '', 'success');
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
