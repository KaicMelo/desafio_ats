import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { CandidateService } from './../services/candidate.service';
import { Candidate } from './../interfaces/candidate.interface';
import { CandidatoModalModule } from './candidate-modal.module';
import { CandidateModalComponent } from './candidate-modal.component';
import { getSimpleCandidate } from '../test-data/build-candidate';

describe(CandidateModalComponent.name, () => {
  let component: CandidateModalComponent;
  let fixture: ComponentFixture<CandidateModalComponent>;
  let service: CandidateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateModalComponent],
      imports: [CandidatoModalModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateModalComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CandidateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`${CandidateModalComponent.prototype.ngOnInit.name}`, () => {
  //   const candidate: Candidate = getSimpleCandidate();
  //   component.candidateSelected = candidate;

  //   fixture.detectChanges();

  //   expect(component).toBeTruthy();
  // });

  // it(`${CandidateModalComponent.prototype.loadingSaveButtom.name}`, () => {
  //   component.loadingSaveButtom(true);

  //   expect(component.confirm.disabled).toBeTrue();
  //   expect(component.confirm.loading).toBeTrue();
  // });

  // it(`${CandidateModalComponent.prototype.saveCandidate.name} should save new candidate list when called`, (done) => {
  //   const candidate: Candidate = getSimpleCandidate();

  //   component.newRegister = true;
  //   component.candidateSelected = candidate;

  //   component.saveCandidate();

  //   spyOn(service, 'saveCandidates').and.returnValue(of(candidate));

  //   fixture.detectChanges();

  //   service
  //     .saveCandidates({ candidate: candidate.candidate })
  //     .subscribe((response) => {
  //       expect(response).toBeTruthy();
  //       done();
  //     });
  // });
  // it(`#PoModalAction should close modal candidate list when called`, () => {
  //   component.close.action();
  //   expect(component).toBeTruthy();
  // });
});
