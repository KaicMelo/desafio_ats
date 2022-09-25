/// <reference types="Cypress" />

import { UtilsSelectors } from './generic-po/selectors/utils.selectors';
import { CandidatoSelectors } from "./generic-po/selectors/candidato.selectors";

export class Candidato {
  timeOut: number = 3000;

  clicarEmCriarCandidato() {
    cy.get(CandidatoSelectors.criarNovoCandidato).click({ force: true });
  }
  preencherNomeCandidadoSalvar(nome: string) {
    cy.get(UtilsSelectors.poInput).type(nome);
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }
  cliqueEmEditarCandidato(nome: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
    .contains(UtilsSelectors.tr, nome)
    .then((row: any) => {
      cy.get(row[0].children[0]).click();
      cy.get(UtilsSelectors.vagaCandidatoEditarRegistro).click();
    });
  } 
  salvarSemPreencherNomeCandidado() {
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }
  alterarNomeCandidatoSalvar(nomeAlternativo: string) {
    cy.get(UtilsSelectors.poInput).clear();
    cy.get(UtilsSelectors.poInput).type(nomeAlternativo);
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }
  cliqueEmDeletarCandidato(nomeAlternativo: string) { 
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeAlternativo)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(UtilsSelectors.vagaCandidatoDeletarRegistro).click();
      });
  }

  naoDevoVerRegistroNaTabela(nomeAlternativo: string) {
    cy.get(UtilsSelectors.poTable).contains(UtilsSelectors.tr, nomeAlternativo).should("not.exist");
  }
}
