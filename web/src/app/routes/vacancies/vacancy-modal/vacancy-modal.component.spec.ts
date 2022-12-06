import { VacanciesService } from './../services/vacancies.service';
import { Vacancies } from './../interfaces/vacancies.interface';
import { of } from 'rxjs';
import { VacancyModalModule } from './vacancy-modal.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyModalComponent } from './vacancy-modal.component';
import { getSimpleVacancy } from '../test-data/build-vacancy';

describe(VacancyModalComponent.name, () => {
  let component: VacancyModalComponent;
  let fixture: ComponentFixture<VacancyModalComponent>;
  let service: VacanciesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyModalComponent],
      imports: [VacancyModalModule],
    }).compileComponents();

    fixture = TestBed.createComponent(VacancyModalComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(VacanciesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`${VacancyModalComponent.prototype.ngOnInit.name}`, () => {
  //   const vacancies: Vacancies = getSimpleVacancy();
  //   component.vacancySelected = vacancies;

  //   fixture.detectChanges();

  //   expect(component).toBeTruthy();
  // });

  // it(`${VacancyModalComponent.prototype.loadingSaveButtom.name}`, () => {
  //   component.loadingSaveButtom(true);

  //   expect(component.confirm.disabled).toBeTrue();
  //   expect(component.confirm.loading).toBeTrue();
  // });

  // it(`${VacancyModalComponent.prototype.saveVacancy.name} should save new Vacancy when called`, (done) => {
  //   const vacancies: Vacancies = getSimpleVacancy();

  //   component.newRegister = true;
  //   component.vacancySelected = vacancies;

  //   component.saveVacancy();

  //   spyOn(service, 'saveVacancies').and.returnValue(of(vacancies));

  //   fixture.detectChanges();

  //   service
  //     .saveVacancies({ vacancy: vacancies.vacancy })
  //     .subscribe((response) => {
  //       expect(response).toBeTruthy();
  //       done();
  //     });
  // });

  // it(`#PoModalAction should close modal Vacancy when called`, () => {
  //   component.close.action();
  //   expect(component).toBeTruthy();
  // });
});
