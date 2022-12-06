import { Resume } from './../interfaces/resume.interface';
import { of } from 'rxjs';
import { ResumeService } from './../services/resume.service';
import { ResumeModalModule } from './resume-modal.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeModalComponent } from './resume-modal.component';
import { getSimpleResume } from '../test-data/build-resume';

describe(ResumeModalComponent.name, () => {
  let component: ResumeModalComponent;
  let fixture: ComponentFixture<ResumeModalComponent>;
  let service: ResumeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeModalComponent],
      imports: [ResumeModalModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeModalComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ResumeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`#${ResumeModalComponent.prototype.loadingSaveButtom.name} should set status in PoModalAction  when called with value`, () => {
  //   component.loadingSaveButtom(false);

  //   expect(component.confirm.disabled).toBe(false);
  //   expect(component.confirm.loading).toBe(false);
  // });

  // it(`${ResumeModalComponent.prototype.saveResume.name} should save new resume when called`, (done) => {
  //   const resume: Resume = getSimpleResume();

  //   component.newRegister = true;
  //   component.candidateSelected = resume;

  //   component.saveResume();

  //   spyOn(service, 'saveResume').and.returnValue(of(resume));

  //   fixture.detectChanges();

  //   service
  //     .saveResume(resume)
  //     .subscribe((response) => {
  //       expect(response).toBeTruthy();
  //       done();
  //     });
  // });
});
