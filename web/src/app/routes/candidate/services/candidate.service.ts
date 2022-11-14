import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Candidate } from '../interfaces/candidate.interface';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  API = environment.API;

  constructor(private http: HttpClient) {}

  listCandidatesToSelect(): Observable<Candidate[]> {
    return this.http
      .get<Observable<Candidate[]>>(`${this.API}/candidatos`)
      .pipe(
        map((candidatos: any) =>
          candidatos.map((candidato: any) => ({
            label: candidato.candidate,
            value: candidato.id,
          }))
        )
      );
  }

  listCandidate(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.API}/candidatos`);
  }
  saveCandidates(req: Candidate) {
    return this.http.post(`${this.API}/candidatos`, req);
  }
  editCandidates(id: number, req: Candidate) {
    return this.http.put(`${this.API}/candidatos/${id}`, req);
  }
  deleteCandidates(id: number) {
    return this.http.delete(`${this.API}/candidatos/${id}`);
  }
}
