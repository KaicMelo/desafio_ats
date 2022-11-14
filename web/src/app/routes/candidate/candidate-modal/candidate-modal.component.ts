import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import Swal from 'sweetalert2';
import { CandidateService } from '../services/candidate.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
} from '@po-ui/ng-components';
import { Candidate } from '../interfaces/candidate.interface';

@Component({
  selector: 'app-candidato-modal',
  templateUrl: './candidate-modal.component.html',
  styleUrls: ['./candidate-modal.component.css'],
})
export class CandidateModalComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() candidatoSelecionado!: Candidate;

  inputCandidato: string = '';

  constructor(
    private poNotification: PoNotificationService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirmar: PoModalAction = {
    action: () => this.salvarCandidato(),
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

  salvarCandidato() {
    if (this.novoRegistro) {
      this.carregandoBotaoSalvar(true);

      this.candidateService
        .saveCandidates({ candidate: this.inputCandidato })
        .subscribe(
          (r) => {
            Swal.fire({
              icon: 'success',
              confirmButtonColor: "var(--color-blue)",
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

      this.candidateService
        .editCandidates(this.candidatoSelecionado.id, {
          candidate: this.candidatoSelecionado.candidate,
        })
        .subscribe(
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
    }
  }

  carregandoBotaoSalvar(status: boolean) {
    this.confirmar.disabled = status;
    this.confirmar.loading = status;
  }
}
