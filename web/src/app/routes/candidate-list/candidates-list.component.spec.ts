import { Candidate } from './../candidate/interfaces/candidate.interface';
import { Vacancies } from './../vacancies/interfaces/vacancies.interface';
import { CandidateService } from './../candidate/services/candidate.service';
import { VacanciesService } from './../vacancies/services/vacancies.service';
import Swal from 'sweetalert2';
import { CandidateList } from './interfaces/candidates-list.interface';
import { of } from 'rxjs';
import { CandidateListService } from './services/candidate-list.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateListModule } from './candidates-list.module';
import { CandidateListComponent } from './candidates-list.component';
import { getObservableVacancy } from '../vacancies/test-data/build-vacancy';
import { getObservableCandidate } from '../candidate/test-data/build-candidate';
import {
  getObservableCandidateList,
  getSimpleCandidateList,
} from './test-data/build-candidate-list';

describe(CandidateListComponent.name, () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;
  let serviceCandidateList: CandidateListService;
  let serviceCandidate: CandidateService;
  let serviceVacancies: VacanciesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateListComponent],
      imports: [CandidateListModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
    serviceCandidateList = TestBed.inject(CandidateListService);
    serviceCandidate = TestBed.inject(CandidateService);
    serviceVacancies = TestBed.inject(VacanciesService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${CandidateListComponent.prototype.createId.name} should create id when called`, () => {
    const params = {
      candidate: 'Kaic',
      vacancy: 'Administrativo',
    };
    const createdId = component.createId(params);
    expect(createdId).toEqual('Kaic-Administrativo');
  });

  it(`#${CandidateListComponent.prototype.deletarCandidatura.name} should delete when called`, (done) => {
    const candidateList: CandidateList = getSimpleCandidateList();

    component.deletarCandidatura(candidateList);

    spyOn(serviceCandidateList, 'deleteCandidates').and.returnValue(
      of(candidateList)
    );

    serviceCandidateList
      .deleteCandidates(candidateList.id)
      .subscribe((response: any) => {
        expect(response).toEqual(candidateList);
        done();
      });

    expect(Swal.isVisible()).toBeTruthy();

    Swal.clickConfirm();
  });

  it(`(D) vacancyList$ should receive array of objects when OnInit called`, (done) => {
    const vacancy: Vacancies[] = getObservableVacancy();

    spyOn(serviceVacancies, 'listVacanciesToSelect').and.returnValue(
      of(vacancy)
    );

    fixture.detectChanges();

    serviceVacancies.listVacanciesToSelect().subscribe((response) => {
      expect(vacancy).toEqual(response);
      done();
    });
  });

  it(`(D) candidateList$ should receive array of objects when OnInit called`, (done) => {
    const candidate: Candidate[] = getObservableCandidate();

    spyOn(serviceCandidate, 'listCandidatesToSelect').and.returnValue(
      of(candidate)
    );

    fixture.detectChanges();

    serviceCandidate.listCandidatesToSelect().subscribe((response) => {
      expect(candidate).toEqual(response);
      done();
    });
  });

  it(`(D) candidateForVacancyList$ should receive array of objects when OnInit called`, (done) => {
    const candidate: CandidateList[] = getObservableCandidateList();

    spyOn(serviceCandidateList, 'listCandidate').and.returnValue(of(candidate));

    fixture.detectChanges();

    serviceCandidateList.listCandidate().subscribe((response) => {
      expect(candidate).toEqual(response);
      done();
    });
  });

  it(`#${CandidateListComponent.prototype.saveApplication.name} should save when called`, (done) => {
    const candidate: CandidateList = getSimpleCandidateList();

    component.saveApplication();

    component.candidateValue = candidate.candidate;
    component.vacancyValue = candidate.vacancy;

    const params = {
      vacancy_id: candidate.vacancy,
      candidate_id: candidate.candidate,
    };

    spyOn(serviceCandidateList, 'saveCandidates').and.returnValue(
      of(candidate)
    );

    serviceCandidateList.saveCandidates(params).subscribe((response) => {
      done();
      expect(response).toBeTruthy();
    });
  });
});
