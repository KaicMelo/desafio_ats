import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VacanciesService } from './vacancies.service';

describe('VacanciesService', () => {
  let service: VacanciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule]
    });
    service = TestBed.inject(VacanciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
