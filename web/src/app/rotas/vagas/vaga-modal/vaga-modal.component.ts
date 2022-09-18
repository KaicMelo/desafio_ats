import { VagasService } from './../services/vagas.service';
import { Vagas } from './../interfaces/vagas.interface';
import { PoModalComponent, PoNotificationService, PoModalAction } from '@po-ui/ng-components';
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
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() vagaSelecionada!: Vagas;

  nomeVaga: string = 'Nome da Vaga';
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

  salvarVaga() {
    if (this.novoRegistro) {
      this.vagasService
        .salvarVagas({ vaga: this.inputVaga })
        .subscribe((r) => {
          this.poNotification.success('Salvo com sucesso');
          this.modaFechadoOuSalvo.emit('salvar');
          this.poModal.close();
        });
    } else {
      this.vagasService
        .editarVagas(this.vagaSelecionada.id, {
          vaga: this.vagaSelecionada.vaga,
        })
        .subscribe((r) => {
          this.poNotification.success('Atualizado com sucesso');
          this.modaFechadoOuSalvo.emit('salvar');
          this.poModal.close();
        });
    }
  }

}
