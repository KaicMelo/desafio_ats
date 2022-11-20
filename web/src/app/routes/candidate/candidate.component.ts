import { Candidate } from './interfaces/candidate.interface';
import { CandidateService } from './services/candidate.service';
import { Component, OnInit } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import {CandidateEntity} from 'src/app/entities/candidate/candidate.entity';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  public candidates$ = this.candidateService.listCandidates();

  candidateSelected!: Candidate;

  showModal: boolean = false;
  newRegister: boolean = false;
  title: string = '';

  readonly columnCandidate: Array<PoTableColumn> = [
    { property: 'id', label: this.literals.candidateNumber },
    { property: 'candidate', label: this.literals.candidate },
  ];

  readonly actions: Array<PoTableAction> = [
    {
      action: this.editCandidate.bind(this),
      icon: 'po-icon-info',
      label: this.literals.toEdit,
    },
    {
      action: this.deleteCandidate.bind(this),
      icon: 'po-icon po-icon-delete',
      label: this.literals.toDelete,
    },
  ];

  constructor(private candidateService: CandidateService, private candidateEntity:CandidateEntity) {}

  ngOnInit(): void {}

  createCandidate() {
    this.title = this.literals.registerNewCandidate;
    this.newRegister = true;

    this.showModal = true;
  }

  closingModal(candidate: any) {
    this.showModal = false;

    if (candidate == 'save') {
      this.candidates$ = this.candidateService.listCandidates();
    }
  }

  editCandidate(candidate: Candidate) {
    this.title = this.literals.changeCandidate;
    this.newRegister = false;
    this.candidateSelected = candidate;

    this.showModal = true;
  }

  async deleteCandidate(candidate: Candidate) {
    this.candidates$ = this.candidateEntity.deleteCandidate(candidate)
    // this.candidates$ = this.candidateService.listCandidates();
  }
}
