/// <reference types="Cypress" />

const url: any = Cypress.config("baseUrl");

export class Generic {
  acessarDesafioAts(rotas: string) {
    cy.visit(`${url}/${rotas}`);
  }
  mensagemDeletadoComSucesso(){
    cy.get(".swal2-popup").should("be.visible");
  }
}
