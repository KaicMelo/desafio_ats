import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoModalComponent } from './curriculo-modal.component';

describe('CurriculoModalComponent', () => {
  let component: CurriculoModalComponent;
  let fixture: ComponentFixture<CurriculoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
