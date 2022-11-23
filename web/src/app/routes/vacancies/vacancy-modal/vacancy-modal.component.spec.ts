import LiteralsFactory, { Literals } from './../../../i18n/literals';
import { VacancyModalModule } from './vacancy-modal.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyModalComponent } from './vacancy-modal.component';
import { getSimpleVacancy } from '../test/build-vacancy';
import Swal from 'sweetalert2';

describe(VacancyModalComponent.name, () => {
  let component: VacancyModalComponent;
  let fixture: ComponentFixture<VacancyModalComponent>;
  let literals: Literals = LiteralsFactory.getLiterals();
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacancyModalComponent],
      imports: [VacancyModalModule],
    }).compileComponents();

    fixture = TestBed.createComponent(VacancyModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('(D)closeOrSaveModal should close modal when called', (done) => {
  //   component.newRegister = true;
  //   component.title = literals.changeVacancy
  //   component.vacancySelected = getSimpleVacancy();

  //   spyOn(component.closeOrSaveModal,'emit');

  //   fixture.detectChanges();

  //   component.closeOrSaveModal.subscribe((next: any) => {
  //      expect(Swal.isVisible()).toBeTruthy();

  //   Swal.clickConfirm();
  //     done()
  //   }); 
  // });
});
