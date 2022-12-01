import { CandidateForVacancy } from '../interface/candidate-for-vacancy.interface';

export function getObservableCandidateForVacancy(): CandidateForVacancy[] {
  const candidate: CandidateForVacancy[] = [
    {
      id: 1,
      candidate: 'Kaic Melo Santos',
      vacancy: 'Analista',
    },
    {
      id: 2,
      candidate: 'Kaic Melo Santos',
      vacancy: 'RH',
    },
    {
      id: 3,
      candidate: 'Kaic Melo Santos',
      vacancy: 'Contabilidade',
    },
  ];
  return candidate;
}
