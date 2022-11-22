import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { VacanciesService } from './services/vacancies.service';
import { Vacancies } from './interfaces/vacancies.interface';
import { VacanciesModule } from './vacancies.module';
import { VacanciesComponent } from './vacancies.component';
import { getObservableVacancy, getSimpleVacancy } from './test/build-vacancy';

describe(VacanciesComponent.name, () => {
  let component: VacanciesComponent;
  let fixture: ComponentFixture<VacanciesComponent>;
  let service: VacanciesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacanciesComponent],
      imports: [VacanciesModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(VacanciesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(VacanciesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${VacanciesComponent.prototype.createVacancy.name} should open modal to create new vacancy when called`, () => {
    component.createVacancy();

    expect(component.title).toContain(component.literals.registerNewVacancy);
    expect(component.newRegister).toBeTrue();
    expect(component.showModal).toBeTrue();
  });

  it(`#${VacanciesComponent.prototype.closingModal.name} should close modal when called`, async () => {
    component.closingModal('save');
    const vacancy: Vacancies[] = getObservableVacancy();

    spyOn(service, 'listVacancies').and.returnValue(of(vacancy));

    fixture.detectChanges();

    const board: HTMLElement =
      fixture.nativeElement.querySelector('.po-table-column');

    expect(board).withContext('Should display in table').not.toBeNull();
    expect(component.showModal).toBeFalse();
  });

  it(`#${VacanciesComponent.prototype.editVacancy.name} should open modal to edit vacancy when called`, () => {
    const vacancy: Vacancies = getSimpleVacancy()

    component.editVacancy(vacancy);

    expect(component.title).toContain(component.literals.changeVacancy);
    expect(component.vacanciesSelected).toEqual(vacancy);
    expect(component.newRegister).toBeFalse();
    expect(component.showModal).toBeTrue();
  });

  it(`(D) vacancies$ should receive array of objects when OnInit called`, async () => {
    const vacancy: Vacancies[] = getObservableVacancy();

    spyOn(service, 'listVacancies').and.returnValue(of(vacancy));

    fixture.detectChanges();

    const board: HTMLElement =
      fixture.nativeElement.querySelector('.po-table-column');

    expect(board).withContext('Should display in table').not.toBeNull();
  });

  it(`#${VacanciesComponent.prototype.deleteVacancy.name} should delete vacancy when called`, async () => {
    const vacancy: Vacancies = getSimpleVacancy()
    
    component.deleteVacancy(vacancy);

    spyOn(service, 'deleteVacancies').and.returnValue(of(vacancy));

    expect(Swal.isVisible()).toBeTruthy();

    Swal.clickConfirm();
  });
});

