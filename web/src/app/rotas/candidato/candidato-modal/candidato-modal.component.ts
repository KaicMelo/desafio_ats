import Swal from 'sweetalert2';
import { CandidatoService } from '../services/candidato.service';
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
import { Candidato } from '../interfaces/candidato.interface';

@Component({
  selector: 'app-candidato-modal',
  templateUrl: './candidato-modal.component.html',
  styleUrls: ['./candidato-modal.component.css'],
})
export class CandidatoModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() candidatoSelecionado!: Candidato;

  nomeCandidato: string = 'Nome do Candidato';
  inputCandidato: string = '';

  constructor(
    private poNotification: PoNotificationService,
    private candidatoService: CandidatoService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirmar: PoModalAction = {
    action: () => this.salvarCandidato(),
    label: 'Salvar',
  };

  fechar: PoModalAction = {
    action: () => {
      this.modaFechadoOuSalvo.emit();
      this.poModal.close();
    },
    label: 'Fechar',
    danger: true,
  };

  salvarCandidato() {
    if (this.novoRegistro) {
      this.carregandoBotaoSalvar(true);

      this.candidatoService
        .salvarCandidatos({ candidate: this.inputCandidato })
        .subscribe(
          (r) => {
            Swal.fire({
              icon: 'success',
              confirmButtonColor: "var(--color-blue)",
              title: 'Salvo com sucesso',
              showConfirmButton: false,
              timer: 1500,
            });

            this.modaFechadoOuSalvo.emit('salvar');
            this.poModal.close();

            this.carregandoBotaoSalvar(false);
          },
          (err) => {
            this.carregandoBotaoSalvar(false);
            this.poNotification.warning('Preencha o campo corretamente');
          }
        );
    } else {
      this.carregandoBotaoSalvar(true);

      this.candidatoService
        .editarCandidatos(this.candidatoSelecionado.id, {
          candidate: this.candidatoSelecionado.candidate,
        })
        .subscribe(
          (r) => {
            Swal.fire({
              icon: 'success',
              title: 'Salvo com sucesso',
              showConfirmButton: false,
              timer: 1500,
            });

            this.modaFechadoOuSalvo.emit('salvar');
            this.poModal.close();
            this.carregandoBotaoSalvar(false);
          },
          (err) => {
            this.carregandoBotaoSalvar(false);
            this.poNotification.warning('Preencha o campo corretamente');
          }
        );
    }
  }

  carregandoBotaoSalvar(status: boolean) {
    this.confirmar.disabled = status;
    this.confirmar.loading = status;
  }
}
