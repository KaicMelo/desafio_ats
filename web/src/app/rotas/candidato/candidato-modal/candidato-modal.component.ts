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
      this.candidatoService
        .salvarCandidatos({ candidato: this.inputCandidato })
        .subscribe((r) => {
          this.poNotification.success('Salvo com sucesso');
          this.modaFechadoOuSalvo.emit('salvar');
          this.poModal.close();
        });
    } else {
      this.candidatoService
        .editarCandidatos(this.candidatoSelecionado.id, {
          candidato: this.candidatoSelecionado.candidato,
        })
        .subscribe((r) => {
          this.poNotification.success('Atualizado com sucesso');
          this.modaFechadoOuSalvo.emit('salvar');
          this.poModal.close();
        });
    }
  }
}
