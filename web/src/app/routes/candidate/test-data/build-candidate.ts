import { Candidate } from '../interfaces/candidate.interface';

export function getObservableCandidate(): Candidate[] {
  const candidate: Candidate[] = [
    {
      id: 1,
      candidate: 'Kaic Melo Santos',
    },
  ];
  return candidate;
}

export function getSimpleCandidate(): Candidate {
  const candidate: Candidate = {
    id: 1,
    candidate: 'Kaic Melo Santos',
  };
  return candidate;
}
