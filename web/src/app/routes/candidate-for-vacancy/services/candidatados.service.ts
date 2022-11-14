import { Observable } from 'rxjs';
import { CandidateForVacancy } from '../interface/candidate-for-vacancy.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatadosService {
  API = environment.API;

  constructor(private http: HttpClient) { } 

  listCandidateForVacancy(): Observable<CandidateForVacancy[]> {
    return this.http.get<CandidateForVacancy[]>(`${this.API}/list_candidates/list_names`);
  }
}
