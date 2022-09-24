/// <reference types="Cypress" />

import { VagasSelectors } from "./generic-po/selectors/vagas.selectors";
import { UtilsSelectors } from "./generic-po/selectors/utils.selectors";

export class Vagas {
  timeOut: number = 3000;

  clicarEmCriarVaga() {
    cy.get(VagasSelectors.criarNovaVaga).click({ force: true });
  }
  preencherNomeVagaSalvar(nomeVaga: string) {
    cy.get(UtilsSelectors.poInput).type(nomeVaga);
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }

  naoPreencherNomeVagaSalvar() {
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }

  cliqueEmEditarVaga(nomeVaga: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeVaga)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(UtilsSelectors.vagaCandidatoEditarRegistro).click();
      });
  }

  alterarNomeVagaSalvar(nomeVagaAlternativo: string) {
    cy.get(UtilsSelectors.poInput).clear();
    cy.get(UtilsSelectors.poInput).type(nomeVagaAlternativo);
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }

  cliqueEmDeletarVaga(nomeVagaAlternativo: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeVagaAlternativo)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(UtilsSelectors.vagaCandidatoDeletarRegistro).click();
      });
  }
  naoDevoVerRegistroNaTabela(nomeVagaAlternativo: string) {
    cy.get(UtilsSelectors.poTable)
      .contains(UtilsSelectors.tr, nomeVagaAlternativo)
      .should("not.exist");
  }
}
