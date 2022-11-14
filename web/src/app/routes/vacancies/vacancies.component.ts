import { VacanciesService } from './services/vacancies.service';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { Vacancies } from './interfaces/vacancies.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public vacancies$ = this.vacanciesService.listVacancies();

  vacanciesSelected!: Vacancies;

  showModal: boolean = false;
  newRegister: boolean = false;

  title: string = '';

  readonly columnVacancy: Array<PoTableColumn> = [
    { property: 'id', label: this.literals.vacancyNumber },
    { property: 'vacancy', label: this.literals.vacancies }
  ];

  readonly actions: Array<PoTableAction> = [
    {
      action: this.editVacancy.bind(this),
      icon: 'po-icon-info',
      label: this.literals.toEdit,
    },
    {
      action: this.deleteVacancy.bind(this),
      icon: 'po-icon po-icon-delete',
      label: this.literals.toDelete,
    },
  ];

  constructor(
    private vacanciesService: VacanciesService,
  ) {}

  ngOnInit(): void {}
  createVacancy() {
    this.title = this.literals.registerNewVacancy;
    this.newRegister = true;

    this.showModal = true;
  }
  
  closingModal(candidate: any) {
    this.showModal = false;

    if (candidate == 'save') {
      this.vacancies$ = this.vacanciesService.listVacancies();
    }
  }
  editVacancy(vacancy: Vacancies) {
    this.title = this.literals.changeVacancy;
    this.vacanciesSelected = vacancy;
    this.newRegister = false;

    this.showModal = true;
  }
  deleteVacancy(vacancy: Vacancies) {
    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteVacancy}?`,
      showDenyButton: true,
      confirmButtonText: this.literals.toDelete,
      confirmButtonColor: "var(--color-blue)",
      denyButtonText: this.literals.toCancel,
    }).then((result) => {
      if (result.isConfirmed) {
        this.vacanciesService
          .deleteVacancies(vacancy.id)
          .subscribe((r) => {
            this.vacancies$ =
              this.vacanciesService.listVacancies();
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
