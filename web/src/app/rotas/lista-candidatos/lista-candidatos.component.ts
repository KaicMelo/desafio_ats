import { PoNotificationService } from '@po-ui/ng-components';
import { ListaCandidatoService } from './services/lista-candidato.service';
import { Vagas } from './../vagas/interfaces/vagas.interface';
import { Candidato } from './../candidato/interfaces/candidato.interface';
import { CandidatoService } from './../candidato/services/candidato.service';
import { VagasService } from './../vagas/services/vagas.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css'],
})
export class ListaCandidatosComponent implements OnInit {
  public listaDeVagas$ = this.vagasService.listaVagas();
  public listaDeCandidatos$ = this.candidatoService.listaCandidatos();
  public listaCandidatatos$ = this.listaCandidatadosService.listaCandidatados();

  listaDeCandidatos: any[] = [];
  listaDeVagas: any[] = [];

  vagaTitulo: string = 'Selecione a vaga';
  candidatoTitulo: string = 'Selecione o Candidato';
  salvarCandidato: string = 'Candidatar';

  candidatoValor: any;
  vagasValor: any;

  constructor(
    private vagasService: VagasService,
    private candidatoService: CandidatoService,
    private listaCandidatadosService: ListaCandidatoService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.vagasService.listaVagas().subscribe((vagas) => {
      vagas.map((vaga: Vagas) => {
        this.listaDeVagas.push({ label: vaga.vacancy, value: vaga.id });
      });
    });
    this.candidatoService.listaCandidatos().subscribe((vagas) => {
      vagas.map((candidato: Candidato) => {
        this.listaDeCandidatos.push({
          label: candidato.candidate,
          value: candidato.id,
        });
      });
    });
  }

  salvarCandidatura() {
    if (!this.candidatoValor)
      return this.poNotification.warning('Selecione o candidato');
    if (!this.vagasValor)
      return this.poNotification.warning('Selecione a vaga');

    this.listaCandidatadosService
      .salvarCandidatados({
        vacancy_id: this.vagasValor,
        candidate_id: this.candidatoValor ,
      })
      .subscribe((r) => {
        this.listaCandidatatos$ =
          this.listaCandidatadosService.listaCandidatados();

        Swal.fire({
          icon: 'success',
          title: 'Salvo com sucesso',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  deletarCandidatura(req: any) {
    Swal.fire({
      title: 'Gostaria de deletar candidatura?',
      showDenyButton: true,
      confirmButtonText: 'Deletar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.listaCandidatadosService
          .deletarCandidatados(req)
          .subscribe((r) => {
            this.listaCandidatatos$ =
              this.listaCandidatadosService.listaCandidatados();
            Swal.fire('Deletado', '', 'success');
          });
      }
    });
  }
}
