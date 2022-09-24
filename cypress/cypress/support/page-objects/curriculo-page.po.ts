/// <reference types="Cypress" />

export class Curriculo {
  timeOut: number = 30000;

  clicarEmCriarCurriculo(nomeVaga: string) {
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeVaga)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(".po-popup-container > :nth-child(1)").click();
      });
  }
  preencherCurriculoSalvar() {
    cy.get(".po-field-container > .po-row > :nth-child(1)").click();
    cy.get(
      ".po-field-container-content > .po-field-icon-container-right > .po-icon"
    ).type("16/06/1995");
    cy.get(
      ".po-md-3 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("3000");
    cy.get(
      '[ng-reflect-name="email"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type("teste@totvs.com.br");
    cy.get(
      '[ng-reflect-name="phone"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type("11956321452");
    cy.get(
      '[ng-reflect-name="address"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type("Rua da Glória");
    cy.get(
      "po-number.po-sm-6 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("501");
    cy.get(
      "po-select.po-sm-6 > po-field-container > .po-field-container > .po-select-container > .po-select-button"
    ).click();
    cy.get(
      "po-select.po-sm-6 > po-field-container > .po-field-container > .po-select-container > .po-select-content > :nth-child(2) > .po-select-item"
    ).click();
    cy.get(".po-textarea").type("Descrição para testar currículo");
    cy.get(
      "po-select.po-sm-12 > po-field-container > .po-field-container > .po-select-container > .po-select-button"
    ).click();
    cy.get(
      "po-select.po-sm-12 > po-field-container > .po-field-container > .po-select-container > .po-select-content > :nth-child(2) > .po-select-item"
    ).click();
    cy.get(".po-button-modal-first-action > .po-button").click();
  }
  mensagemCurriculoCadastradoComSucesso() {
    cy.get(".swal2-popup").should("be.visible");
  }

  cliqueVisualizarCurriculo(nomeCandidato: string) {
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(".po-popup-container > :nth-child(2)").click();
      });
  }
  mensagemCurriculoNaoCadastrado() {
    cy.get(".po-toaster-message")
      .contains("Voçê não possui currículo. Clique em cadastrar currículo")
      .should("be.visible");
  }
  mensagemCurriculoNaoCadastradoParaDeletar() {
    cy.get(".po-toaster-message")
      .contains("Voçê não possui currículo para deletar")
      .should("be.visible");
  }

  cliqueDeletarCurriculo(nomeCandidato: string) {
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(".po-popup-container > :nth-child(3)").click();
      });
  }
  candidatoNaoContemCurriculoCadastrado(nomeCandidato: string) {
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[3])
          .contains("Não tem Currículo")
          .should("be.visible");
      });
  }
  candidatoContemCurriculoCadastrado(nomeCandidato: string) {
    cy.get(".po-table", { timeout: this.timeOut })
      .contains("tr", nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[3])
          .contains("Tem Currículo")
          .should("be.visible");
      });
  }
  alterarCurriculoSalvar(nomeAlternativo: string) {
    cy.get(".po-field-container > .po-row > :nth-child(1)").click();
    cy.get(
      ".po-field-container-content > .po-field-icon-container-right > .po-icon"
    ).type("16/06/1994");
    cy.get(
      ".po-md-3 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("4000");
    cy.get(
      '[ng-reflect-name="email"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type("test_email@totvs.com.br");
    cy.get(
      '[ng-reflect-name="phone"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type("1196324789");
    cy.get(
      '[ng-reflect-name="address"] > po-field-container > .po-field-container > .po-field-container-content > .po-input'
    ).type("Av. Braz Leme");
    cy.get(
      "po-number.po-sm-6 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).clear();
    cy.get(
      "po-number.po-sm-6 > po-field-container > .po-field-container > .po-field-container-content > .po-input"
    ).type("1000");
    cy.get(
      "po-select.po-sm-6 > po-field-container > .po-field-container > .po-select-container > .po-select-button"
    ).click();
    cy.get(
      "po-select.po-sm-6 > po-field-container > .po-field-container > .po-select-container > .po-select-content > :nth-child(2) > .po-select-item"
    ).click();
    cy.get(".po-textarea").type("Alterando descrição");
    cy.get(
      "po-select.po-sm-12 > po-field-container > .po-field-container > .po-select-container > .po-select-button"
    ).click();
    cy.get(
      "po-select.po-sm-12 > po-field-container > .po-field-container > .po-select-container > .po-select-content > :nth-child(3) > .po-select-item"
    ).click();
    cy.get(".po-button-modal-first-action > .po-button").click();
  }

  confirmarDeletarCurriculo(){
    cy.get(".swal2-confirm").click().wait(200);
    cy.get(".swal2-confirm").click(); 
  }
  mensagemCurriculoDeletadoSucesso(){
    cy.get(".swal2-popup").should("be.visible");
  }
}
