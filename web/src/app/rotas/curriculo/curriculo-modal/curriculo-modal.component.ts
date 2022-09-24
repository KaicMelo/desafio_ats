import { Curriculo } from './../interfaces/curriculo.interface';
import Swal from 'sweetalert2';
import { CurriculoService } from './../services/curriculo.service';
import { Candidato } from './../../lista-candidatos/interfaces/lista-candidatos.interface';
import {
  PoDynamicFormField,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
} from '@po-ui/ng-components';
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curriculo-modal',
  templateUrl: './curriculo-modal.component.html',
  styleUrls: ['./curriculo-modal.component.css'],
})
export class CurriculoModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('dynamicForm') dynamicForm!: NgForm;

  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() candidatoSelecionado!: Curriculo;

  fields: Array<PoDynamicFormField> = [
    {
      property: 'candidate',
      divider: 'Dados Pessoais',
      disabled: true,
      label: 'Nome',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Digite seu nome',
    },
    {
      property: 'birthday',
      label: 'Data Nascimento',
      type: 'date',
      format: 'dd/mm/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
    },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'po-icon-finance',
    },
    {
      property: 'genre',
      gridColumns: 6,
      gridSmColumns: 12,
      options: ['Homem', 'Mulher', 'Outro'],
      order: 2,
    },
    {
      property: 'email',
      divider: 'CONTACTS',
      gridColumns: 6,
      icon: 'po-icon-mail',
    },
    {
      property: 'phone',
      label: 'Celular',
      mask: '(99) 99999-9999',
      gridColumns: 6,
    },
    { property: 'address', label: 'Endereço', gridColumns: 6 },
    {
      property: 'address_number',
      label: 'Numero Endereço',
      type: 'number',
      gridColumns: 6,
    },
    {
      property: 'state',
      label: 'Estado',
      gridColumns: 6,
      options: [
        { label: 'Santa Catarina', value: 'Santa Catarina' },
        { label: 'São Paulo', value: 'São Paulo' },
        { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
        { label: 'Minas Gerais', value: 'Minas Gerais' },
        { label: 'Rio Grande do Sul', value: 'Rio Grande do Sul' },
      ],
    },
    {
      property: 'short_description',
      label: 'Descrição',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Breve descrição sobre voçê',
    },
    {
      property: 'hobbies',
      divider: 'Informações Adicionais',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Futebol', 'Assistir filme', 'Bicicleta', 'Yoga', 'Viajar', 'Correr'],
      optionsMulti: false,
    },
  ];

  constructor(
    private poNotification: PoNotificationService,
    private curriculoService: CurriculoService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirmar: PoModalAction = {
    action: () => this.salvarCurriculo(),
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

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  salvarCurriculo() {
    const id = this.candidatoSelecionado.resume_id;
    delete this.candidatoSelecionado.candidate;
    delete this.candidatoSelecionado.has_resume;
    delete this.candidatoSelecionado.resume_id;
    
    if (this.novoRegistro) {
      this.carregandoBotaoSalvar(true);

      this.curriculoService.salvarCurriculo(this.candidatoSelecionado).subscribe(
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
    } else {
      this.carregandoBotaoSalvar(true);
      this.curriculoService
        .editarCurriculo(id, this.candidatoSelecionado)
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
