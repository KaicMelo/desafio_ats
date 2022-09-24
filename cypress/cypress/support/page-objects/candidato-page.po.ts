/// <reference types="Cypress" />

const url: any = Cypress.config("baseUrl");
export class Candidato {
  timeOut: number = 3000;

  clicarEmCriarCandidato() {
    cy.get("#criar_novo_candidato > .po-button").click({ force: true });
  }
  preencherNomeCandidadoSalvar(nome: string) {
    cy.get(".po-input").type(nome);
    cy.get(".po-button-modal-first-action > .po-button").click();
  }
  cliqueEmEditarCandidato(nome: string) {
    cy.get(".po-table", { timeout: this.timeOut })
    .contains("tr", nome)
    .then((row: any) => {
      cy.get(row[0].children[0]).click();
      cy.get(".po-popup-container > :nth-child(1)").click();
    });
  } 
  salvarSemPreencherNomeCandidado() {
    cy.get(".po-button-modal-first-action > .po-button").click();
  }
  alterarNomeCandidatoSalvar(nomeAlternativo: string) {
    cy.get(".po-input").clear();
    cy.get(".po-input").type(nomeAlternativo);
    cy.get(".po-button-modal-first-action > .po-button").click();
  }
  cliqueEmDeletarCandidato(nomeAlternativo: string) { 
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeAlternativo)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(".po-popup-container > :nth-child(2)").click();
      });
  }

  naoDevoVerRegistroNaTabela(nomeAlternativo: string) {
    cy.get(".po-table").contains("tr", nomeAlternativo).should("not.exist");
  }
  confirmarDeletarUsuario() {
    cy.get(".swal2-confirm").click().wait(200);
    cy.get(".swal2-confirm").click(); 
  }

  mensagemCandidatoCadastradoComSucesso() {
    cy.get(".swal2-popup").should("be.visible");
  }
  mensagemPreenchaCampoCorretamente() {
    cy.get(".po-toaster-message").should("be.visible");
  }
  mensagemCandidatoDeletadoSucesso() {
    cy.get(".swal2-popup").contains("Deletado").should("be.visible");
  }
}
