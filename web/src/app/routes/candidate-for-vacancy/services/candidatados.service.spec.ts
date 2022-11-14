import { TestBed } from '@angular/core/testing';

import { CandidatadosService } from './candidatados.service';

describe('CandidatadosService', () => {
  let service: CandidatadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
