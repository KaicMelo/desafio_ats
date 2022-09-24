/// <reference types="Cypress" />

import { ListaCandidatoSelectors } from './generic-po/selectors/listaCandidatos.selectors';
import { UtilsSelectors } from './generic-po/selectors/utils.selectors';

export class ListaCandidatos {
  timeOut: number = 30000;

  selecionoCandidato(nomeCandidato: string) {
    cy.get(ListaCandidatoSelectors.selectCandidato).click();
    cy.get(UtilsSelectors.poSelectItem).contains(nomeCandidato).click().wait(200);
  }
  selecionoVaga(nomeVaga: string) {
    cy.get(ListaCandidatoSelectors.selectVaga).click();
    cy.get(UtilsSelectors.poSelectItem).contains(nomeVaga).click();

    cy.get(UtilsSelectors.poButton).click();
  }

  DeletarCandidatoCandidatado(nomeCandidato: string,nomeVaga: string) {
    const card = `#${nomeCandidato}-${nomeVaga}`.replace(/ /g, "")
    cy.get(card).contains('Deletar Candidatura').click();
  }
}
