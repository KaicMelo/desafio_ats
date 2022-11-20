import { Injectable } from '@angular/core';
import LiteralsFactory, { Literals } from 'src/app/i18n/literals';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export default class GenericEntity {

  literals: Literals = LiteralsFactory.getLiterals();

  public async confirmDialog() {
    return new Promise(async (resolve) => {
      Swal.fire({
        title: `${this.literals.wouldLikeToDeleteCandidate}`,
        showDenyButton: true,
        confirmButtonColor: 'var(--color-blue)',
        confirmButtonText: this.literals.toDelete,
        denyButtonText: this.literals.toCancel,
      }).then((result): any => {
        resolve(result.isConfirmed);
      });
    });
  }

  public simpleDialog() {
    Swal.fire({
      confirmButtonColor: 'var(--color-blue)',
      icon: 'success',
      title: this.literals.deleted,
      timer: 2000,
    }).then((response) => {
    })
  }
}
