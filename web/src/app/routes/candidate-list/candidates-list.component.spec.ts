import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateListModule } from './candidates-list.module';
import { CandidateListComponent } from './candidates-list.component';

describe(CandidateListComponent.name, () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateListComponent],
      imports: [CandidateListModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${CandidateListComponent.prototype.createId.name} should create id when called`, () => {
    const params = {
      candidate: 'Kaic',
      vacancy: 'Administrativo',
    };
    const createdId = component.createId(params);
    expect(createdId).toEqual('Kaic-Administrativo');
  });
});
