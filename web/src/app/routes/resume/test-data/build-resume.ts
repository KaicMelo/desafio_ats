import { Resume } from '../interfaces/resume.interface';

export function getObservableResume(): Resume[] {
  const resume: Resume[] = [
    {
      id: 1,
      has_resume: 'true',
      resume_id: 1,
      candidate_id: 1,
      candidate: 'Kaic Melo Santos',
      address: 'Rua João barbosa rabelo',
      address_number: 501,
      birthday: new Date('1995-06-16'),
      email: 'KaicMelo@totvs.com.br',
      hobbies: 'Bicicleta',
      genre: 'Homem',
      name: '',
      phone: 11958587077,
      short_description: '11958587077',
      state: 'São Paulo',
      wage: 6000,
    },
  ];
  return resume;
}

export function getSimpleResume(): Resume {
  const resume: Resume = {
    id: 1,
    has_resume: 'true',
    resume_id: 1,
    candidate_id: 1,
    candidate: 'Kaic Melo Santos',
    address: 'Rua João barbosa rabelo',
    address_number: 501,
    birthday: new Date('1995-06-16'),
    email: 'KaicMelo@totvs.com.br',
    hobbies: 'Bicicleta',
    genre: 'Homem',
    name: '',
    phone: 11958587077,
    short_description: '11958587077',
    state: 'São Paulo',
    wage: 6000,
  };
  return resume;
}
