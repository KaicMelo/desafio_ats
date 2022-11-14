import { Resume } from '../interfaces/resume.interface';
import Swal from 'sweetalert2';
import { ResumeService } from '../services/resume.service';
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
  selector: 'app-resume-modal',
  templateUrl: './resume-modal.component.html',
  styleUrls: ['./resume-modal.component.css'],
})
export class ResumeModalComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('dynamicForm') dynamicForm!: NgForm;

  @Output() closeOrSaveModal: any = new EventEmitter();
  @Input() newRegister!: boolean;
  @Input() title: string = '';
  @Input() candidateSelected!: Resume;

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
    private resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirm: PoModalAction = {
    action: () => this.saveResume(),
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

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  saveResume() {
    const id = this.candidateSelected.resume_id;
    delete this.candidateSelected.candidate;
    delete this.candidateSelected.has_resume;
    delete this.candidateSelected.resume_id;

    if (this.newRegister) {
      this.loadingSaveButtom(true);

      this.resumeService
        .saveResume(this.candidateSelected)
        .subscribe(
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
      this.resumeService
        .editCurriculo(id, this.candidateSelected)
        .subscribe(
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
    }
  }

  loadingSaveButtom(status: boolean) {
    this.confirm.disabled = status;
    this.confirm.loading = status;
  }
}
