import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateListService {
  API = environment.API;

  constructor(private http: HttpClient) {}

  candidateList(): Observable<any> {
    return this.http.get<any>(`${this.API}/lista_candidatados`);
  }
  saveCandidates(candidatado: object) {
    return this.http.post(`${this.API}/lista_candidatados`, candidatado);
  }
  deleteCandidates(id: number) {
    return this.http.delete(`${this.API}/lista_candidatados/${id}`);
  }
}
