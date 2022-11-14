import { Resume } from '../interfaces/resume.interface';
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

  listaCurriculo(): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.API}/curriculo`);
  }
  salvarCurriculo(req: Resume) {
    return this.http.post(`${this.API}/curriculo`, req);
  }
  editarCurriculo(id: number, req: Resume) {
    return this.http.put(`${this.API}/curriculo/${id}`, req);
  }
  deletarCurriculo(id: number) {
    return this.http.delete(`${this.API}/curriculo/${id}`);
  }
}
