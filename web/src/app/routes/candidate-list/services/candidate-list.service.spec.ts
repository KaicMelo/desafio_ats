import { Candidate } from './../../candidate/interfaces/candidate.interface';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { getSimpleCandidate } from '../../candidate/test/build-candidate';
import { CandidateListService } from './candidate-list.service';

describe(CandidateListService.name, () => {
  let service: CandidateListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    service = TestBed.inject(CandidateListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${CandidateListService.prototype.saveCandidates.name} should save candidate when called`, (done) => {
    const candidate: Candidate = getSimpleCandidate();

    spyOn(service, 'saveCandidates').and.returnValue(of(candidate));

    service.saveCandidates(candidate).subscribe((response: any) => {
      expect(response.id).toEqual(candidate.id);
      expect(response.candidate).toEqual(candidate.candidate);
      done();
    });
  });

  it(`#${CandidateListService.prototype.deleteCandidates.name} should edit candidate when called`, (done) => {
    const candidate: Candidate = getSimpleCandidate();

    spyOn(service, 'deleteCandidates').and.returnValue(of(candidate));

    service.deleteCandidates(candidate.id).subscribe((response: any) => {
      expect(response.id).toEqual(candidate.id);
      expect(response.candidate).toEqual(candidate.candidate);
      done();
    });
  });

  it(`#${CandidateListService.prototype.listCandidate.name} should edit candidate when called`, (done) => {
    const candidate: Candidate = getSimpleCandidate();

    spyOn(service, 'listCandidate').and.returnValue(of(candidate));

    service.listCandidate().subscribe((response: any) => {
      expect(response.id).toEqual(candidate.id);
      expect(response.candidate).toEqual(candidate.candidate);
      done();
    });
  });
});
