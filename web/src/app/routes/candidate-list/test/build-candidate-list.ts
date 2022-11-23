import { CandidateList, CandidateListToSave } from './../interfaces/candidates-list.interface';

export function getObservableCandidateList(): CandidateList[] {
  const candidateList: CandidateList[] = [
    {
      id: 1,
      candidate: 'Kaic Melo Santos',
      vacancy: 'Analista',
    },
  ];
  return candidateList;
}

export function getSimpleCandidateList(): CandidateList {
  const candidateList: CandidateList = {
    id: 1,
    candidate: 'Kaic Melo Santos',
    vacancy: 'Analista',
  };
  return candidateList;
}

export function getSimpleCandidateToSave() {
  const candidate: CandidateListToSave = {
    id: 1,
    vacancy_id: 1,
    candidate_id: 2,
  };
  return candidate;
}
