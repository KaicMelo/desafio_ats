import { RouterTestingModule } from '@angular/router/testing';
import { ResumeService } from './services/resume.service';
import { of } from 'rxjs';
import { Resume } from './interfaces/resume.interface';
import { ResumeModule } from './resume.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';
import Swal from 'sweetalert2';
import { getObservableResume, getSimpleResume } from './test-data/build-resume';

describe(ResumeComponent.name, () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let service: ResumeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      imports: [ResumeModule,RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ResumeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${ResumeComponent.prototype.createResume.name}`, () => {
    const resume: Resume = getSimpleResume();
    resume.has_resume = 'false';
    
    component.createResume(resume);

    component.candidateSelected = {
      candidate_id: resume.candidate_id,
      candidate: resume.candidate,
    };

    expect(component.title).toBe(component.literals.registerCV);
    expect(component.newRegister).toBeTrue();
    expect(component.showModal).toBeTrue();
    expect(component).toBeTruthy();
  });
  it(`${ResumeComponent.prototype.viewResume.name}`, () => {
    const resume: Resume = getSimpleResume();

    component.viewResume(resume);

    component.candidateSelected = resume;

    expect(component.title).toBe(component.literals.changeCV);
    expect(component.newRegister).toBe(false);
    expect(component.showModal).toBeTrue();
    expect(component).toBeTruthy();
  });

  it(`${ResumeComponent.prototype.deleteResume.name}`, (done) => {
    const resume: Resume = getSimpleResume();
    const resumeArray: Resume[] = getObservableResume();

    component.deleteResume(resume);

    spyOn(service, 'listResume').and.returnValue(of(resumeArray));

    service.listResume().subscribe((response) => {
      expect(response).toBeTruthy();
      expect(Swal.isVisible()).toBeTruthy();
      done();
    });
  });
  it(`#${ResumeComponent.prototype.closingModal.name} should close modal when called`, async () => {
    component.closingModal('save');
    const resumeArray: Resume[] = getObservableResume();

    spyOn(service, 'listResume').and.returnValue(of(resumeArray));

    fixture.detectChanges();

    const board: HTMLElement =
      fixture.nativeElement.querySelector('.po-table-column');

    expect(board).withContext('Should display in table').not.toBeNull();
    expect(component.showModal).toBeFalse();
  });
});
