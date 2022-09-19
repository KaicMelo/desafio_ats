import { PoRadioGroupOption } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { Vagas } from './../interfaces/vagas.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  API = environment.API;

  constructor(private http: HttpClient) {}

  listaVagas(): Observable<Vagas[]> {
    return this.http.get<Vagas[]>(`${this.API}/vagas`);
  }
  salvarVagas(req: Vagas) {
    return this.http.post(`${this.API}/vagas`, req);
  }
  editarVagas(id: number, req: Vagas) {
    return this.http.put(`${this.API}/vagas/${id}`, req);
  }
  deletarVagas(id: number) {
    return this.http.delete(`${this.API}/vagas/${id}`);
  }
}
