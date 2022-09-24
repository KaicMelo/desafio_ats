/// <reference types="Cypress" />

import { UtilsSelectors } from "./generic-po/selectors/utils.selectors";

const url: any = Cypress.config("baseUrl");
const timeOut:number = 30000;

export class Generic {
  acessarDesafioAts(rotas: string) {
    cy.visit(`${url}/${rotas}`);
  }
  mensagemDeSucesso(contem: string) {
    cy.get(UtilsSelectors.sweetAlertSucesso, { timeout: timeOut })
      // .contains(contem)
      .should("be.visible");
  }
  confirmarDeletar() {
    cy.get(UtilsSelectors.sweetAlertDeletar).click();
  }
  mensagemDeAlerta(contem: string) {
    cy.get(UtilsSelectors.toasterDeAlert)
    // .contains(contem)
    .should("be.visible");
  }
}
