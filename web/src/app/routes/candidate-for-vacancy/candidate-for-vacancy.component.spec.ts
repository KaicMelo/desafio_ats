import { CandidateForVacancy } from './interface/candidate-for-vacancy.interface';
import { of } from 'rxjs';
import { CandidatadosService } from './services/candidatados.service';
import { CandidateForVacancyModule } from './candidate-for-vacancy.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateForVacancyComponent } from './candidate-for-vacancy.component';
import { getObservableCandidateForVacancy } from './test-data/build-candidate-for-vacancy';

describe(CandidateForVacancyComponent.name, () => {
  let component: CandidateForVacancyComponent;
  let fixture: ComponentFixture<CandidateForVacancyComponent>;
  let service: CandidatadosService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateForVacancyComponent ],
      imports:[CandidateForVacancyModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateForVacancyComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CandidatadosService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${CandidateForVacancyComponent.prototype.candidateForVacancy$}`, (done) => {
    const candidate: CandidateForVacancy[] = getObservableCandidateForVacancy();

    spyOn(service,'listCandidateForVacancy').and.returnValue(of(candidate))

    component.candidateForVacancy$.subscribe( r => {
      expect(component).toBeTruthy();
      done();
    })
  });
});
