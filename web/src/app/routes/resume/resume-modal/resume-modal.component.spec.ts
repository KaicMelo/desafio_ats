import { ResumeModalModule } from './resume-modal.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeModalComponent } from './resume-modal.component';

describe('ResumeModalComponent', () => {
  let component: ResumeModalComponent;
  let fixture: ComponentFixture<ResumeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeModalComponent ],
      imports:[ResumeModalModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
