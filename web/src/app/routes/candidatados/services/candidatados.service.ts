import { Observable } from 'rxjs';
import { Candidatados } from '../interface/candidatados.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatadosService {
  API = environment.API;

  constructor(private http: HttpClient) { } 

  listaCandidatados(): Observable<Candidatados[]> {
    return this.http.get<Candidatados[]>(`${this.API}/lista_candidatados/lista_nomes`);
  }
}
