import { CandidatoModalModule } from './candidate-modal.module';
import { map } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateModalComponent } from './candidate-modal.component';

describe('CandidateModalComponent', () => {
  let component: CandidateModalComponent;
  let fixture: ComponentFixture<CandidateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateModalComponent ],
      imports:[CandidatoModalModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
