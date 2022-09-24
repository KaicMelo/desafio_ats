/// <reference types="Cypress" />

export class ListaCandidatos {
  timeOut: number = 30000;

  selecionoCandidato(nomeCandidato: string) {
    cy.get(':nth-child(1) > app-selecionar > po-select > po-field-container > .po-field-container > .po-select-container > .po-select-button > .po-field-icon-container-right > .po-icon').click();
    cy.get('.po-select-item').contains(nomeCandidato).click().wait(200);
  }
  selecionoVaga(nomeVaga: string) {
    cy.get(':nth-child(2) > app-selecionar > po-select > po-field-container > .po-field-container > .po-select-container > .po-select-button > .po-field-icon-container-right > .po-icon').click();
    cy.get('.po-select-item').contains(nomeVaga).click();

    cy.get('.po-button').click();
  }
  mensagemCandidatoCandidatadoSucesso() {
    cy.get(".swal2-popup").should("be.visible");
  }
  mensagemCandidatoJaCandidatado() {
    cy.get(".po-toaster-message").contains('Usuário já se cadastrou para essa vaga').should("be.visible");
  }

  DeletarCandidatoCandidatado(nomeCandidato: string,nomeVaga: string) {
    const card = `#${nomeCandidato}-${nomeVaga}`.replace(/ /g, "")
    cy.get(card).contains('Deletar Candidatura').click();
  }
  confirmarDeletarCandidatura() {
    cy.get('.swal2-confirm').click();
  }
}
