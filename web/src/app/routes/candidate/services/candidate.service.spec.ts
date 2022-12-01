import { Candidate } from './../interfaces/candidate.interface';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { getObservableCandidate, getSimpleCandidate } from '../test-data/build-candidate';

import { CandidateService } from './candidate.service';

describe(CandidateService.name, () => {
  let service: CandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${CandidateService.prototype.listCandidates.name}`, (done) => {
    const candidate: Candidate[] = getObservableCandidate();

    spyOn(service, 'listCandidates').and.returnValue(of(candidate));

    service.listCandidatesToSelect().subscribe((response: any) => {
      expect(response).toBeTruthy();
      done();
    });
  });

  it(`${CandidateService.prototype.saveCandidates.name}`, (done) => {
    const candidate: Candidate = getSimpleCandidate();

    spyOn(service, 'saveCandidates').and.returnValue(of(candidate));

    service.saveCandidates(candidate).subscribe((response: any) => {
      expect(response.id).toEqual(candidate.id);
      expect(response.candidate).toEqual(candidate.candidate);
      expect(response).toBeTruthy();
      done();
    });
  });

  it(`${CandidateService.prototype.editCandidates.name}`, (done) => {
    const candidate: Candidate = getSimpleCandidate();

    spyOn(service, 'editCandidates').and.returnValue(of(candidate));

    service.editCandidates(candidate.id, candidate).subscribe((response: any) => {
      expect(response.id).toEqual(candidate.id);
      expect(response.candidate).toEqual(candidate.candidate);
      expect(response).toBeTruthy();
      done();
    });
  });

  it(`${CandidateService.prototype.deleteCandidates.name}`, (done) => {
    const candidate: Candidate = getSimpleCandidate();

    spyOn(service, 'deleteCandidates').and.returnValue(of(candidate));

    service.deleteCandidates(candidate.id).subscribe((response: any) => {
      expect(response.id).toEqual(candidate.id);
      expect(response.candidate).toEqual(candidate.candidate);
      expect(response).toBeTruthy();
      done();
    });
  });
});
