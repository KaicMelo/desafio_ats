import Swal from 'sweetalert2';
import { CandidateService } from './services/candidate.service';
import { of } from 'rxjs';
import { Candidate } from './interfaces/candidate.interface';
import { CandidateModule } from './candidate.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateComponent } from './candidate.component';
import {
  getObservableCandidate,
  getSimpleCandidate,
} from './test-data/build-candidate';

describe(CandidateComponent.name, () => {
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;
  let service: CandidateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateComponent],
      imports: [CandidateModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CandidateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`#${CandidateComponent.prototype.createCandidate.name} should open modal to create new candidate when called`, () => { 
    component.createCandidate();

    expect(component.title).toContain(component.literals.registerNewCandidate);
    expect(component.newRegister).toBeTrue();
    expect(component.showModal).toBeTrue();
  });

  it(`#${CandidateComponent.prototype.closingModal.name} should close modal when called`, () => {
    component.closingModal('save');
    const candidate: Candidate[] = getObservableCandidate();

    spyOn(service, 'listCandidates').and.returnValue(of(candidate));

    fixture.detectChanges();

    expect(component.showModal).toBeFalse();
  });

  it(`#${CandidateComponent.prototype.editCandidate.name} should open modal to edit vacancy when called`, () => {
    const candidate: Candidate = getSimpleCandidate();

    component.editCandidate(candidate);

    expect(component.title).toContain(component.literals.changeCandidate);
    expect(component.candidateSelected).toEqual(candidate);
    expect(component.newRegister).toBeFalse();
    expect(component.showModal).toBeTrue();
  });

  it(`#${CandidateComponent.prototype.deleteCandidate.name} should delete candidate when called`, async () => {
    const candidate: Candidate = getSimpleCandidate();

    component.deleteCandidate(candidate);

    spyOn(service, 'deleteCandidates').and.returnValue(of(candidate));

    expect(Swal.isVisible()).toBeTruthy();

    Swal.clickConfirm();
  });
});
