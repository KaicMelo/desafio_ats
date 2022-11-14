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
  selector: 'app-candidate-modal',
  templateUrl: './candidate-modal.component.html',
  styleUrls: ['./candidate-modal.component.css'],
})
export class CandidateModalComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @Output() closeOrSaveModal: any = new EventEmitter();
  @Input() newRegister!: boolean;
  @Input() title: string = '';
  @Input() candidateSelected!: Candidate; 

  inputCandidate: string = '';

  constructor(
    private poNotification: PoNotificationService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.poModal.open();
  }

  confirm: PoModalAction = {
    action: () => this.saveCandidate(),
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

  saveCandidate() {
    if (this.newRegister) {
      this.loadingSaveButtom(true);

      this.candidateService
        .saveCandidates({ candidate: this.inputCandidate })
        .subscribe(
          (r) => {
            Swal.fire({
              icon: 'success',
              confirmButtonColor: "var(--color-blue)",
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

      this.candidateService
        .editCandidates(this.candidateSelected.id, {
          candidate: this.candidateSelected.candidate,
        })
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
