import { PoNotificationService } from '@po-ui/ng-components';
import { CandidateListService } from './services/candidate-list.service';
import { CandidateService } from './../candidate/services/candidate.service';
import { VacanciesService } from '../vacancies/services/vacancies.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public listaDeVagas$ = this.vacanciesService.listVacanciesToSelect();
  public listaDeCandidatos$ = this.candidateService.listCandidatesToSelect();
  public listaCandidatatos$ = this.listaCandidatadosService.candidateList();

  listaDeCandidatos: any[] = [];
  listaDeVagas: any[] = [];
  candidatoValor: any;
  vagasValor: any;

  constructor(
    private vacanciesService: VacanciesService,
    private candidateService: CandidateService,
    private listaCandidatadosService: CandidateListService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {}

  salvarCandidatura() {
    if (!this.candidatoValor)
      return this.poNotification.warning(this.literals.SelectTheCandidate);
    if (!this.vagasValor)
      return this.poNotification.warning(this.literals.selectTheVacancy);

    this.listaCandidatadosService
      .saveCandidates({
        vacancy_id: this.vagasValor,
        candidate_id: this.candidatoValor,
      })
      .subscribe(
        (r) => {
          this.listaCandidatatos$ =
            this.listaCandidatadosService.candidateList();

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
          .deleteCandidates(req)
          .subscribe((r) => {
            this.listaCandidatatos$ =
              this.listaCandidatadosService.candidateList();
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
