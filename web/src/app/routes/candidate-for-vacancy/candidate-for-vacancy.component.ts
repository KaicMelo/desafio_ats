import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import { CandidatadosService } from './services/candidatados.service';
import { Component, OnInit } from '@angular/core';
import { CandidateForVacancy } from './interface/candidate-for-vacancy.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-candidate-for-vacancy',
  templateUrl: './candidate-for-vacancy.component.html',
  styleUrls: ['./candidate-for-vacancy.component.css'],
})
export class CandidateForVacancyComponent implements OnInit {
  literals: Literals = LiteralsFactory.getLiterals();

  candidateForVacancy$ = this.candidatadosService.listCandidateForVacancy().pipe(
    map((candidates: CandidateForVacancy[]) => {
      let response: any = [];
      for (let i = 0; i < candidates.length; i++) {
        var candidatadosIgual = false;
        for (var j = 0; j < i; j++) {
          if (response[j] && candidates[i].candidate == response[j].candidate) {
            response[j].vacancy.push({
              name: candidates[i].vacancy,
            });
            candidatadosIgual = true;
            break;
          }
        }

        if (!candidatadosIgual) {
          let newClass = `${candidates[i].candidate}-${candidates[i].vacancy}`
          response.push({
            candidate: candidates[i].candidate,
            classeTag: newClass.replace(/ /g, ''),
            vacancy: [
              {
                name: candidates[i].vacancy,
              },
            ],
          });
        }
      }
      return response;
    })
  );
  constructor(private candidatadosService: CandidatadosService) {}

  ngOnInit(): void {}

}
