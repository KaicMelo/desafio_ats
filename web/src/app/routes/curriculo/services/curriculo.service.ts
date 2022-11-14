import { Curriculo } from './../interfaces/curriculo.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  listaCurriculo(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(`${this.API}/curriculo`);
  }
  salvarCurriculo(req: Curriculo) {
    return this.http.post(`${this.API}/curriculo`, req);
  }
  editarCurriculo(id: number, req: Curriculo) {
    return this.http.put(`${this.API}/curriculo/${id}`, req);
  }
  deletarCurriculo(id: number) {
    return this.http.delete(`${this.API}/curriculo/${id}`);
  }
}
