import { Resume } from '../interfaces/resume.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  API = environment.API;

  constructor(private http: HttpClient) { }

  listResume(): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.API}/resume`);
  }
  saveResume(req: Resume) {
    return this.http.post(`${this.API}/resume`, req);
  }
  editCurriculo(id: number, req: Resume) {
    return this.http.put(`${this.API}/resume/${id}`, req);
  }
  deleteCurriculo(id: number) {
    return this.http.delete(`${this.API}/resume/${id}`);
  }
}
