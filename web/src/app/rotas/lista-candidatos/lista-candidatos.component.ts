import { PoNotificationService } from '@po-ui/ng-components';
import { ListaCandidatoService } from './services/lista-candidato.service';
import { CandidatoService } from './../candidato/services/candidato.service';
import { VagasService } from './../vagas/services/vagas.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css'],
})
export class ListaCandidatosComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public listaDeVagas$ = this.vagasService.listaVagasToSelect();
  public listaDeCandidatos$ = this.candidatoService.listaCandidatosToSelect();
  public listaCandidatatos$ = this.listaCandidatadosService.listaCandidatados();

  listaDeCandidatos: any[] = [];
  listaDeVagas: any[] = [];
  candidatoValor: any;
  vagasValor: any;

  constructor(
    private vagasService: VagasService,
    private candidatoService: CandidatoService,
    private listaCandidatadosService: ListaCandidatoService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {}

  salvarCandidatura() {
    if (!this.candidatoValor)
      return this.poNotification.warning(this.literals.SelectTheCandidate);
    if (!this.vagasValor)
      return this.poNotification.warning(this.literals.selectTheVacancy);

    this.listaCandidatadosService
      .salvarCandidatados({
        vacancy_id: this.vagasValor,
        candidate_id: this.candidatoValor,
      })
      .subscribe(
        (r) => {
          this.listaCandidatatos$ =
            this.listaCandidatadosService.listaCandidatados();

          Swal.fire({
            icon: 'success',
            title: this.literals.savedSuccessfully,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          error.status == 402
            ? this.poNotification.warning(
                this.literals.alreadyRegisteredForThisJob
              )
            : null;
        }
      );
  }

  deletarCandidatura(req: any) {
    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteCandidacy} ?`,
      showDenyButton: true,
      confirmButtonColor: "var(--color-blue)",
      confirmButtonText: this.literals.toDelete,
      denyButtonText: this.literals.toCancel,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.listaCandidatadosService
          .deletarCandidatados(req)
          .subscribe((r) => {
            this.listaCandidatatos$ =
              this.listaCandidatadosService.listaCandidatados();
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

  createId(createId: any) {
    const newId = `${createId.candidate}-${createId.vacancy}`;
    return newId.replace(/ /g, '');
  }
}
