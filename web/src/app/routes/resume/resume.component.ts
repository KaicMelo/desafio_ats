import { Observable } from 'rxjs';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import Swal from 'sweetalert2';
import { ResumeService } from './services/resume.service';
import { Resume } from './interfaces/resume.interface';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
  PoNotificationService,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  literals: Literals= LiteralsFactory.getLiterals();

  public resume$!:Observable<Resume[]> 

  candidateSelected!: Resume;

  showModal: boolean = false;
  newRegister: boolean = false;

  title: string = '';

  readonly columnCandidate: Array<PoTableColumn> = [
    { property: 'id', label: this.literals.candidateNumber },
    { property: 'candidate', label: this.literals.candidate },
    {
      property: 'has_resume',
      label: this.literals.resume,
      type: 'label',
      labels: [
        { value: 'true', color: 'color-11', label: this.literals.haveCV },
        { value: 'false', color: 'color-07', label: this.literals.dontHaveCV },
      ],
    },
  ];

  readonly actions: Array<PoTableAction> = [
    {
      action: this.createResume.bind(this),
      icon: 'po-icon po-icon-export',
      label: this.literals.registerCV,
    },
    {
      action: this.viewResume.bind(this),
      icon: 'po-icon po-icon-eye',
      label: this.literals.viewCV,
    },
    {
      action: this.deleteResume.bind(this),
      icon: 'po-icon po-icon-delete',
      label: this.literals.deleteCV,
    },
  ];
  constructor(
    private poNotification: PoNotificationService,
    private resumeService: ResumeService
  ) {}

  ngOnInit(): void {
    this.resume$ = this.resumeService.listResume(); 
  }

  createResume(req: Resume) {
    if (req.has_resume == 'true') {
      this.poNotification.warning(
        this.literals.youAlreadyHaveCV
      );
      return;
    }
    this.title = this.literals.registerCV;
    this.candidateSelected = {
      candidate_id: req.id,
      candidate: req.candidate,
    };
    this.newRegister = true;
    this.showModal = true;
  }
  viewResume(req: Resume) {
    if (req.has_resume == 'false') {
      this.poNotification.warning(
        this.literals.youDontHaveCV
      );
      return;
    }
    this.title = this.literals.changeCV;

    this.candidateSelected = req;

    this.newRegister = false;
    this.showModal = true;
  }

  deleteResume(curriculo: Resume) {
    if (curriculo.has_resume == 'false') {
      this.poNotification.warning(this.literals.dontHaveCVToDelete);
      return;
    }

    Swal.fire({
      title: `${this.literals.wouldLikeToDeleteCV}?`,
      showDenyButton: true,
      confirmButtonColor: "var(--color-blue)",
      confirmButtonText: this.literals.toDelete,
      denyButtonText: this.literals.toCancel,
    }).then((result: any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.resumeService
          .deleteCurriculo(curriculo.resume_id)
          .subscribe((r) => {
            this.resume$ = this.resumeService.listResume();
            Swal.fire({
              confirmButtonColor: "var(--color-blue)",
              icon: 'success',
              title: this.literals.deleted,
              timer: 2000
            });
          });
      }
    });
  }
  closingModal(candidate: any) { 
    this.showModal = false;

    if (candidate == 'save') {
      this.resume$ = this.resumeService.listResume();
    }
  }
}
