import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoModalComponent } from './candidato-modal.component';

describe('CandidatoModalComponent', () => {
  let component: CandidatoModalComponent;
  let fixture: ComponentFixture<CandidatoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
