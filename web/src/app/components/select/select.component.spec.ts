import { SelectModule } from './select.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [SelectModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    component.options = [
      {
        label: 'RH',
        value: 1,
      },
      {
        label: 'TI',
        value: 2,
      },
    ];
    component.label = component.literals.selectTheVacancy

    spyOn(component.formValue, 'emit');

    fixture.detectChanges();
    component.onChange(2);

    expect(component).toBeTruthy();
  });
});
