import { Candidate } from './../candidate/interfaces/candidate.interface';
import { CandidateList } from './interfaces/candidates-list.interface';
import { Vacancies } from './../vacancies/interfaces/vacancies.interface';
import { Observable } from 'rxjs';
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

  public vacancyList$!: Observable<Vacancies[]>;
  public candidateList$!: Observable<Candidate[]>;
  public candidateForVacancyList$!: Observable<CandidateList[]>;

  candidateList: any[] = [];
  vacancyList: any[] = [];
  candidateValue: any;
  vacancyValue: any;

  constructor(
    private vacanciesService: VacanciesService,
    private candidateService: CandidateService,
    private candidateListService: CandidateListService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.vacancyList$ = this.vacanciesService.listVacanciesToSelect();
    this.candidateList$ = this.candidateService.listCandidatesToSelect();
    this.candidateForVacancyList$ = this.candidateListService.listCandidate();
  }

  saveApplication() {
    if (!this.candidateValue)
      return this.poNotification.warning(this.literals.SelectTheCandidate);
    if (!this.vacancyValue)
      return this.poNotification.warning(this.literals.selectTheVacancy);

    this.candidateListService
      .saveCandidates({
        vacancy_id: this.vacancyValue,
        candidate_id: this.candidateValue,
      })
      .subscribe(
        (r) => {
          this.candidateForVacancyList$ =
            this.candidateListService.listCandidate();

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
      confirmButtonColor: 'var(--color-blue)',
      confirmButtonText: this.literals.toDelete,
      denyButtonText: this.literals.toCancel,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.candidateListService.deleteCandidates(req).subscribe((r) => {
          this.candidateForVacancyList$ =
            this.candidateListService.listCandidate();
          Swal.fire({
            confirmButtonColor: 'var(--color-blue)',
            icon: 'success',
            title: this.literals.deleted,
            timer: 2000,
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
