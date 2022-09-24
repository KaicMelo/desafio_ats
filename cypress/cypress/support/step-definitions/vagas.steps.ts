/// <reference types="Cypress" />
import { Vagas } from "../page-objects/vagas-page.po";
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

const vagas = new Vagas();
let nomeVaga: string;
let nomeVagaAlternativo: string;

before(() => {
  cy.fixture("db").then((candidatos) => {
    nomeVaga = candidatos.nomeVaga;
    nomeVagaAlternativo = candidatos.nomeVagaAlternativo;
  });
});

And("clico em criar novo vaga", () => {
  vagas.clicarEmCriarVaga();
});
And("preencho o nome do vaga e salvo", () => {
  vagas.preencherNomeVagaSalvar(nomeVaga);
});
Then("devo visualizar mensagem de vaga cadastrado com sucesso", () => {
    vagas.mensagemVagaCadastradaComSucesso();
});

And("não preencho o nome do vaga e salvo", () => {
  vagas.naoPreencherNomeVagaSalvar();
});

And("clico em editar vaga", () => {
  vagas.cliqueEmEditarVaga(nomeVaga);
});
And("altero o nome do vaga e salvo", () => {
  vagas.alterarNomeVagaSalvar(nomeVagaAlternativo);
});

And("clico em deletar vaga alterada", () => {
  vagas.cliqueEmDeletarVaga(nomeVagaAlternativo);
});
And("clico em deletar vaga", () => {
  vagas.cliqueEmDeletarVaga(nomeVaga);
});
And("confirmo deletar vaga", () => {
  vagas.confirmarDeletarVaga();
});

Then("devo visualizar mensagem de vaga deletado com sucesso", () => {
  vagas.mensagemVagaDeletadaSucesso();
});
Then("não devo visualizar o registro na lista", (nomeVagaAlternativo) => {
  vagas.naoDevoVerRegistroNaTabela(nomeVagaAlternativo);
});
