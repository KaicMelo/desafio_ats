import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaModalComponent } from './vaga-modal.component';

describe('VagaModalComponent', () => {
  let component: VagaModalComponent;
  let fixture: ComponentFixture<VagaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
