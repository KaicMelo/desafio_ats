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

  listCandidate(): Observable<any> {
    return this.http.get<any>(`${this.API}/list_candidates`);
  }
  saveCandidates(candidate: object) {
    return this.http.post(`${this.API}/list_candidates`, candidate);
  }
  deleteCandidates(id: number) {
    return this.http.delete(`${this.API}/list_candidates/${id}`);
  }
}
