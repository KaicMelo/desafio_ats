import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateForVacancyComponent } from './candidate-for-vacancy.component';

describe('CandidateForVacancyComponent', () => {
  let component: CandidateForVacancyComponent;
  let fixture: ComponentFixture<CandidateForVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateForVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateForVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
