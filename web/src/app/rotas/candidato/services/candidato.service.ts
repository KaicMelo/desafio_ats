import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Candidato } from '../interfaces/candidato.interface';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  API = environment.API;

  constructor(private http: HttpClient) {}

  listaCandidatosToSelect(): Observable<Candidato[]> {
    return this.http
      .get<Observable<Candidato[]>>(`${this.API}/candidatos`)
      .pipe(
        map((candidatos: any) =>
          candidatos.map((candidato: any) => ({
            label: candidato.candidate,
            value: candidato.id,
          }))
        )
      );
  }

  listaCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${this.API}/candidatos`);
  }
  salvarCandidatos(req: Candidato) {
    return this.http.post(`${this.API}/candidatos`, req);
  }
  editarCandidatos(id: number, req: Candidato) {
    return this.http.put(`${this.API}/candidatos/${id}`, req);
  }
  deletarCandidatos(id: number) {
    return this.http.delete(`${this.API}/candidatos/${id}`);
  }
}
