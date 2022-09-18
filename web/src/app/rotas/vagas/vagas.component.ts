import {
  PoTableAction,
  PoTableColumn,
  PoNotificationService,
} from '@po-ui/ng-components';
import { VagasService } from './services/vagas.service';
import { Component, OnInit } from '@angular/core';
import { Vagas } from './interfaces/vagas.interface';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css'],
})
export class VagasComponent implements OnInit {
  public vagas$ = this.vagasService.listaVagas();

  labelCriar: string = 'Criar';

  VagaSelecionada!: Vagas;

  mostrarModal: boolean = false;
  novoRegistro: boolean = false;

  titulo: string = '';

  readonly colunaVaga: Array<PoTableColumn> = [
    { property: 'id', label: 'Numero da Vaga' },
    { property: 'vaga', label: 'Vagas' }
  ];

  readonly acoes: Array<PoTableAction> = [
    {
      action: this.editarVaga.bind(this),
      icon: 'po-icon-info',
      label: 'Editar',
    },
    {
      action: this.deletarVaga.bind(this),
      icon: 'po-icon po-icon-delete',
      label: 'Deletar',
    },
  ];

  constructor(
    private vagasService: VagasService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {}
  criarVagas() {
    this.titulo = 'Cadastrar nova vaga';
    this.novoRegistro = true;

    this.mostrarModal = true;
  }

  mostrarMais() {}

  aoFecharModal(candidato: string) {
    this.mostrarModal = false;

    if (candidato == 'salvar') {
      this.vagas$ = this.vagasService.listaVagas();
    }
  }
  editarVaga(vagas: Vagas) {
    this.titulo = 'Alterar Vaga';
    this.VagaSelecionada = vagas;

    this.mostrarModal = true;
  }
  deletarVaga(vagas: Vagas) {
    this.vagasService.deletarVagas(vagas.id).subscribe((r) => {
      this.poNotification.success('Deletado com sucesso');
      this.vagas$ = this.vagasService.listaVagas();
    });
  }
}
