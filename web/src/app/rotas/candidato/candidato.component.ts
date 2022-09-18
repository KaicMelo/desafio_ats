import { Candidato } from './interfaces/candidato.interface';
import { CandidatoService } from './services/candidato.service';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
  PoNotificationService,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css'],
})
export class CandidatoComponent implements OnInit {
  public candidatos$ = this.candidatoService.listaCandidatos();

  labelCriar: string = 'Criar';

  candidatoSelecionado!: Candidato;

  mostrarModal: boolean = false;
  novoRegistro: boolean = false;
  titulo: string = '';

  readonly colunaCandidato: Array<PoTableColumn> = [
    { property: 'id', label: 'Numero do Candidato' },
    { property: 'candidato', label: 'Candidato' },
  ];

  readonly acoes: Array<PoTableAction> = [
    {
      action: this.editarCandidato.bind(this),
      icon: 'po-icon-info',
      label: 'Editar',
    },
    {
      action: this.deletarCandidato.bind(this),
      icon: 'po-icon po-icon-delete',
      label: 'Deletar',
    },
  ];

  constructor(
    private candidatoService: CandidatoService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {}

  criarCandidato() {
    this.titulo = 'Cadastrar novo Candidato';
    this.novoRegistro = true;

    this.mostrarModal = true;
  }

  aoFecharModal(candidato: string) {
    this.mostrarModal = false;

    if (candidato == 'salvar') {
      this.candidatos$ = this.candidatoService.listaCandidatos();
    }
  }

  mostrarMais() {}

  editarCandidato(candidato: Candidato) {
    this.titulo = 'Alterar Candidato';
    this.candidatoSelecionado = candidato;

    this.mostrarModal = true;
  }

  deletarCandidato(candidato: Candidato) {
    this.candidatoService.deletarCandidatos(candidato.id).subscribe((r) => {
      this.poNotification.success('Deletado com sucesso');
      this.candidatos$ = this.candidatoService.listaCandidatos();
    });
  }
}
