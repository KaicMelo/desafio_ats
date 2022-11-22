import { Vacancies } from './../interfaces/vacancies.interface';

export function getObservableVacancy(): Vacancies[] {
  const vacancy: Vacancies[] = [
    {
      id: 1,
      vacancy: 'Analista de sistemas',
    },
  ];
  return vacancy;
}

export function getSimpleVacancy(): Vacancies {
  const vacancy: Vacancies = {
    id: 1,
    vacancy: 'Analista de sistemas',
  };
  return vacancy;
}
