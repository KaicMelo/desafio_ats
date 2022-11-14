import { Observable, map } from 'rxjs';
import { Vacancies } from './../interfaces/vacancies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  API = environment.API;

  constructor(private http: HttpClient) {}

  listVacanciesToSelect(): Observable<Vacancies[]> {
    return this.http
      .get<Observable<Vacancies[]>>(`${this.API}/vagas`)
      .pipe(
        map((vacancies: any) =>
        vacancies.map((vaga: any) => ({
            label: vaga.vacancy,
            value: vaga.id,
          }))
        )
      );
  }

  listVacancies(): Observable<Vacancies[]> {
    return this.http.get<Vacancies[]>(`${this.API}/vagas`);
  }
  saveVacancies(req: Vacancies) {
    return this.http.post(`${this.API}/vagas`, req);
  }
  editVacancies(id: number, req: Vacancies) {
    return this.http.put(`${this.API}/vagas/${id}`, req);
  }
  deleteVacancies(id: number) {
    return this.http.delete(`${this.API}/vagas/${id}`);
  }
}
