import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import Swal from 'sweetalert2';
import { VagasService } from './../services/vagas.service';
import { Vagas } from './../interfaces/vagas.interface';
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
  selector: 'app-vaga-modal',
  templateUrl: './vaga-modal.component.html',
  styleUrls: ['./vaga-modal.component.css'],
})
export class VagaModalComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() vagaSelecionada!: Vagas;

  inputVaga: string = '';

  constructor(
    private poNotification: PoNotificationService,
    private vagasService: VagasService
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
      this.vagasService.salvarVagas({ vacancy: this.inputVaga }).subscribe(
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
      this.vagasService
        .editarVagas(this.vagaSelecionada.id, {
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
