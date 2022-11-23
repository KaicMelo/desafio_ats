import { Observable, map } from 'rxjs';
import { Vacancies } from './../interfaces/vacancies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VacanciesService {
  API = environment.API;

  constructor(private http: HttpClient) {}

  listVacanciesToSelect(): Observable<Vacancies[]> {
    return this.http.get<Observable<Vacancies[]>>(`${this.API}/vacancies`).pipe(
      map((vacancies: any) =>
        vacancies.map((vaga: any) => ({
          label: vaga.vacancy,
          value: vaga.id,
        }))
      )
    );
  }
  listVacancies(): Observable<Vacancies[]> {
    return this.http.get<Vacancies[]>(`${this.API}/vacancies`);
  }
  saveVacancies(req: Vacancies) {
    return this.http.post(`${this.API}/vacancies`, req);
  }
  editVacancies(id: number, req: Vacancies) {
    return this.http.put(`${this.API}/vacancies/${id}`, req);
  }
  deleteVacancies(id: number) {
    return this.http.delete(`${this.API}/vacancies/${id}`);
  }
}
