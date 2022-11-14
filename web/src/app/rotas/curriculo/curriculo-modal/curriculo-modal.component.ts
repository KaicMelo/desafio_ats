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
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';

@Component({
  selector: 'app-curriculo-modal',
  templateUrl: './curriculo-modal.component.html',
  styleUrls: ['./curriculo-modal.component.css'],
})
export class CurriculoModalComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('dynamicForm') dynamicForm!: NgForm;

  @Output() modaFechadoOuSalvo: any = new EventEmitter();
  @Input() novoRegistro!: boolean;
  @Input() titulo: string = '';
  @Input() candidatoSelecionado!: Curriculo;

  fields: Array<PoDynamicFormField> = [
    {
      property: 'candidate',
      divider: this.literals.personalData,
      disabled: true,
      label: this.literals.name,
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: this.literals.typeYourName,
    },
    {
      property: 'birthday',
      label: this.literals.birthDate,
      type: 'date',
      format: 'dd/mm/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
    },
    {
      property: 'wage',
      label: this.literals.salaryExpectation,
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
      options: [this.literals.man, this.literals.women, this.literals.other],
      order: 2,
    },
    {
      property: 'email',
      divider: this.literals.contacts,
      gridColumns: 6,
      icon: 'po-icon-mail',
    },
    {
      property: 'phone',
      label: this.literals.cell,
      mask: '(99) 99999-9999',
      gridColumns: 6,
    },
    { property: 'address', label: this.literals.address, gridColumns: 6 },
    {
      property: 'address_number',
      label: this.literals.addressNumber,
      type: 'number',
      gridColumns: 6,
    },
    {
      property: 'state',
      label: this.literals.state,
      gridColumns: 6,
      options: [
        {
          label: this.literals.santaCatarina,
          value: this.literals.santaCatarina,
        },
        { label: this.literals.saoPaulo, value: this.literals.saoPaulo },
        {
          label: this.literals.rioDeJaneiro,
          value: this.literals.rioDeJaneiro,
        },
        { label: this.literals.minasGerais, value: this.literals.minasGerais },
        {
          label: this.literals.rioGrandeDoSul,
          value: this.literals.rioGrandeDoSul,
        },
      ],
    },
    {
      property: 'short_description',
      label: this.literals.description,
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: this.literals.descriptionAboutYou,
    },
    {
      property: 'hobbies',
      divider: this.literals.additionalInformation,
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: [
        this.literals.football,
        this.literals.watchMovie,
        this.literals.bicycle,
        this.literals.yoga,
        this.literals.travel,
        this.literals.run,
      ],
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

      this.curriculoService
        .salvarCurriculo(this.candidatoSelecionado)
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
    } else {
      this.carregandoBotaoSalvar(true);
      this.curriculoService
        .editarCurriculo(id, this.candidatoSelecionado)
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
