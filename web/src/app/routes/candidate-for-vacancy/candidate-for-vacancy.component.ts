import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { CandidatadosService } from './services/candidatados.service';
import { Component, OnInit } from '@angular/core';
import { CandidateForVacancy } from './interface/candidate-for-vacancy.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-candidatados',
  templateUrl: './candidate-for-vacancy.component.html',
  styleUrls: ['./candidate-for-vacancy.component.css'],
})
export class CandidateForVacancyComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  candidatados$ = this.candidatadosService.listaCandidatados().pipe(
    map((candidatados: CandidateForVacancy[]) => {
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
          let newClass = `${candidatados[i].candidate}-${candidatados[i].vacancy}`
          saida.push({
            candidate: candidatados[i].candidate,
            classeTag: newClass.replace(/ /g, ''),
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

}
