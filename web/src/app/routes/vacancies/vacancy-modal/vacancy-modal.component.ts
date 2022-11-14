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
  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() vagaSelecionada!: Vacancies;

  inputVaga: string = '';

  constructor(
    private poNotification: PoNotificationService,
    private vacanciesService: VacanciesService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirmar: PoModalAction = {
    action: () => this.salvarVaga(),
    label: this.literals.toSave,
  };

  fechar: PoModalAction = {
    action: () => {
      this.modaFechadoOuSalvo.emit();
      this.poModal.close();
    },
    label: this.literals.close,
    danger: true,
  };

  salvarVaga() {
    if (this.novoRegistro) {
      this.carregandoBotaoSalvar(true);
      this.vacanciesService.saveVacancies({ vacancy: this.inputVaga }).subscribe(
        (r) => {
          Swal.fire({
            icon: 'success',
            title: this.literals.savedSuccessfully,
            showConfirmButton: false,
            timer: 1500,
          });
          this.modaFechadoOuSalvo.emit('salvar');
          this.poModal.close();
          this.carregandoBotaoSalvar(false);
        },
        (err) => {
          this.carregandoBotaoSalvar(false);
          this.poNotification.warning(this.literals.fillInTheFieldCorrectly);
        }
      );
    } else {
      this.carregandoBotaoSalvar(true);
      this.vacanciesService
        .editVacancies(this.vagaSelecionada.id, {
          vacancy: this.vagaSelecionada.vacancy,
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

            this.modaFechadoOuSalvo.emit('salvar');
            this.poModal.close();
            this.carregandoBotaoSalvar(true);
          },
          (err) => {
            this.carregandoBotaoSalvar(false);
            this.poNotification.warning(this.literals.fillInTheFieldCorrectly);
          }
        );
    }
  }
  carregandoBotaoSalvar(status: boolean) {
    this.confirmar.disabled = status;
    this.confirmar.loading = status;
  }
}
