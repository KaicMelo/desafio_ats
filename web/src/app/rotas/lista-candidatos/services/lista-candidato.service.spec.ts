import { TestBed } from '@angular/core/testing';

import { ListaCandidatoService } from './lista-candidato.service';

describe('ListaCandidatoService', () => {
  let service: ListaCandidatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCandidatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
