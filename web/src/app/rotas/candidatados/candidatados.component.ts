import { CandidatadosService } from './services/candidatados.service';
import { Component, OnInit } from '@angular/core';
import { Candidatados } from './interface/candidatados.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-candidatados',
  templateUrl: './candidatados.component.html',
  styleUrls: ['./candidatados.component.css'],
})
export class CandidatadosComponent implements OnInit {
  candidatados$ = this.candidatadosService.listaCandidatados().pipe(
    map((candidatados: Candidatados[]) => {
      let saida: any = [];
      for (let i = 0; i < candidatados.length; i++) {
        var candidatadosIgual = false;
        for (var j = 0; j < i; j++) {
          if (saida[j] && candidatados[i].candidate == saida[j].candidate) {
            saida[j].vacancy.push({
              nome: candidatados[i].vacancy,
            });
            candidatadosIgual = true;
            break;
          }
        }

        if (!candidatadosIgual) {
          saida.push({
            candidate: candidatados[i].candidate,
            vacancy: [
              {
                nome: candidatados[i].vacancy,
              },
            ],
          });
        }
      }
      return saida;
    })
  );
  constructor(private candidatadosService: CandidatadosService) {}

  ngOnInit(): void {}

  createClass(createId: any) {
    const newClass = `${createId[0].candidate}-${createId[0].vacancy[0].nome}`;
    return newClass.replace(/ /g, '');
  }
}
