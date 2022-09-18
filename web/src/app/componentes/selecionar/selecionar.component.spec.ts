import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarComponent } from './selecionar.component';

describe('SelecionarComponent', () => {
  let component: SelecionarComponent;
  let fixture: ComponentFixture<SelecionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
