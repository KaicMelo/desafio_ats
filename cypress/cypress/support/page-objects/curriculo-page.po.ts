/// <reference types="Cypress" />

import { CurriculoSelectors } from "./generic-po/selectors/curriculo.selectors";
import { UtilsSelectors } from "./generic-po/selectors/utils.selectors";

export class Curriculo {
  timeOut: number = 30000;

  clicarEmCriarCurriculo(nomeVaga: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeVaga)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(UtilsSelectors.curriculoCadastrarRegistro).click();
      });
  }
  preencherCurriculoSalvar() {
    cy.get(CurriculoSelectors.formOpcaoHomem).click();
    cy.get(CurriculoSelectors.formDataNascimento).type("16/06/1995");
    cy.get(CurriculoSelectors.formPretencaoSalarial).type("3000");
    cy.get(CurriculoSelectors.formEmail).type("teste@totvs.com.br");
    cy.get(CurriculoSelectors.formTelefone).type("11956321452");
    cy.get(CurriculoSelectors.formEndereco).type("Rua da Glória");
    cy.get(CurriculoSelectors.formNumero).type("501");
    cy.get(CurriculoSelectors.formSelectEstado).click();
    cy.get(CurriculoSelectors.formOpcaoSaoPaulo).click();
    cy.get(CurriculoSelectors.formTextArea).type("Descrição para testar currículo");
    cy.get(
      CurriculoSelectors.formSelectHobbies
    ).click();
    cy.get(
      CurriculoSelectors.formOpcaoAssistirFilme
    ).click();
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }
  cliqueVisualizarCurriculo(nomeCandidato: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(UtilsSelectors.curriculoVisualizarRegistro).click();
      });
  }
  cliqueDeletarCurriculo(nomeCandidato: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[0]).click();
        cy.get(CurriculoSelectors.deletarRegistro).click();
      });
  }
  candidatoNaoContemCurriculoCadastrado(nomeCandidato: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[3])
          .contains("Não tem Currículo")
          .should("be.visible");
      });
  }
  candidatoContemCurriculoCadastrado(nomeCandidato: string) {
    cy.get(UtilsSelectors.poTable, { timeout: this.timeOut })
      .contains(UtilsSelectors.tr, nomeCandidato)
      .then((row: any) => {
        cy.get(row[0].children[3])
          .contains("Tem Currículo")
          .should("be.visible");
      });
  }
  alterarCurriculoSalvar() {
    cy.get(CurriculoSelectors.formOpcaoHomem).click();
    cy.get(CurriculoSelectors.formDataNascimento).type("16/06/1994");
    cy.get(CurriculoSelectors.formPretencaoSalarial).clear();
    cy.get(CurriculoSelectors.formPretencaoSalarial).type("4000");
    cy.get(CurriculoSelectors.formEmail).clear();
    cy.get(CurriculoSelectors.formEmail).type("test_email@totvs.com.br");
    cy.get(CurriculoSelectors.formTelefone).clear();
    cy.get(CurriculoSelectors.formTelefone).type("1196324789");
    cy.get(CurriculoSelectors.formEndereco).clear();
    cy.get(CurriculoSelectors.formEndereco).type("Av. Braz Leme");
    cy.get(CurriculoSelectors.formNumero).clear();
    cy.get(CurriculoSelectors.formNumero).type("1000");
    cy.get(CurriculoSelectors.formSelectEstado).click();
    cy.get(CurriculoSelectors.formOpcaoSaoPaulo).click();
    cy.get(CurriculoSelectors.formTextArea).clear();
    cy.get(CurriculoSelectors.formTextArea).type("Alterando descrição");
    cy.get(CurriculoSelectors.formSelectHobbies).click();
    cy.get(CurriculoSelectors.formOpcaoAssistirFilme).click();
    cy.get(UtilsSelectors.primeiraAcaoBotaoSalvar).click();
  }
}
