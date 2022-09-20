import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatadosComponent } from './candidatados.component';

describe('CandidatadoComponent', () => {
  let component: CandidatadosComponent;
  let fixture: ComponentFixture<CandidatadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
