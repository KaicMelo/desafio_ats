import { CandidateService } from './../../routes/candidate/services/candidate.service';
import GenericEntity from 'src/app/entities/genericEntities/generic.entity';
import { Candidate } from 'src/app/routes/candidate/interfaces/candidate.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CandidateEntity {
    constructor(private genericEntity:GenericEntity,
        private candidateService: CandidateService){}

  public deleteCandidate(candidate: Candidate): any  {
    this.genericEntity.confirmDialog().then((response) => {
      if (response) {
        this.candidateService.deleteCandidates(candidate.id).subscribe( (r): any => {
            if(r){
                this.genericEntity.simpleDialog()
            }
        });
      }
    });
  }
}
