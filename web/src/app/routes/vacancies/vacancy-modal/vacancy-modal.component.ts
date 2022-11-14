import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import Swal from 'sweetalert2';
import { VacanciesService } from '../services/vacancies.service';
import { Vacancies } from './../interfaces/vacancies.interface';
import {
  PoModalComponent,
  PoNotificationService,
  PoModalAction,
} from '@po-ui/ng-components';
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-vacancy-modal',
  templateUrl: './vacancy-modal.component.html',
  styleUrls: ['./vacancy-modal.component.css'],
})
export class VacancyModalComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @Output() closeOrSaveModal: any = new EventEmitter();
  @Input() newRegister!: boolean;
  @Input() title: string = '';
  @Input() vacancySelected!: Vacancies; 

  inputVacancy: string = '';

  constructor(
    private poNotification: PoNotificationService,
    private vacanciesService: VacanciesService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirm: PoModalAction = {
    action: () => this.saveVacancy(),
    label: this.literals.toSave,
  };

  close: PoModalAction = {
    action: () => {
      this.closeOrSaveModal.emit();
      this.poModal.close();
    },
    label: this.literals.close,
    danger: true,
  };

  saveVacancy() {
    if (this.newRegister) {
      this.loadingSaveButtom(true);
      this.vacanciesService.saveVacancies({ vacancy: this.inputVacancy }).subscribe(
        (r) => {
          Swal.fire({
            icon: 'success',
            title: this.literals.savedSuccessfully,
            showConfirmButton: false,
            timer: 1500,
          });
          this.closeOrSaveModal.emit('save');
          this.poModal.close();
          this.loadingSaveButtom(false);
        },
        (err) => {
          this.loadingSaveButtom(false);
          this.poNotification.warning(this.literals.fillInTheFieldCorrectly);
        }
      );
    } else {
      this.loadingSaveButtom(true);
      this.vacanciesService
        .editVacancies(this.vacancySelected.id, {
          vacancy: this.vacancySelected.vacancy,
        })
        .subscribe(
          (r) => {
            Swal.fire({
              icon: 'success',
              confirmButtonColor: 'var(--color-blue)',
              title: this.literals.savedSuccessfully,
              showConfirmButton: false,
              timer: 1500,
            });

            this.closeOrSaveModal.emit('save');
            this.poModal.close();
            this.loadingSaveButtom(true);
          },
          (err) => {
            this.loadingSaveButtom(false);
            this.poNotification.warning(this.literals.fillInTheFieldCorrectly);
          }
        );
    }
  }
  loadingSaveButtom(status: boolean) {
    this.confirm.disabled = status;
    this.confirm.loading = status;
  }
}
