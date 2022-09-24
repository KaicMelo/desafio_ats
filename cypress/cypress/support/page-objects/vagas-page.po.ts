/// <reference types="Cypress" />

export class Vagas {
  timeOut: number = 3000;

  clicarEmCriarVaga() {
    cy.get("#criar_nova_vaga > .po-button").click({ force: true });
  }
  preencherNomeVagaSalvar(nomeVaga: string) {
    cy.get(".po-input").type(nomeVaga);
    cy.get(".po-button-modal-first-action > .po-button").click();
  }
  mensagemVagaCadastradaComSucesso() {
    cy.get(".swal2-popup").should("be.visible");
  }

  naoPreencherNomeVagaSalvar() {
    cy.get(".po-button-modal-first-action > .po-button").click();
  }

  cliqueEmEditarVaga(nomeVaga: string) {
    cy.get(".po-table", { timeout: this.timeOut })
    .contains("tr", nomeVaga)
    .then((row: any) => {
      cy.get(row[0].children[0]).click();
      cy.get(".po-popup-container > :nth-child(1)").click();
    });
  }

  alterarNomeVagaSalvar(nomeVagaAlternativo: string) {
    cy.get(".po-input").clear();
    cy.get(".po-input").type(nomeVagaAlternativo);
    cy.get(".po-button-modal-first-action > .po-button").click();
  }

  cliqueEmDeletarVaga(nomeVagaAlternativo: string) {
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeVagaAlternativo)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(".po-popup-container > :nth-child(2)").click();
      });
  }

  confirmarDeletarVaga(){
    cy.get(".swal2-confirm").click().wait(200);
    cy.get(".swal2-confirm").click();
  }
  mensagemVagaDeletadaSucesso(){
    cy.get(".swal2-popup").contains("Deletado").should("be.visible");
  }
  naoDevoVerRegistroNaTabela(nomeVagaAlternativo: string){
    cy.get(".po-table").contains("tr", nomeVagaAlternativo).should("not.exist");
  }
}
