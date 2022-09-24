import { Generic } from './../page-objects/generic-page.po';
import { Candidato } from "../page-objects/candidato-page.po";
import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

const generic = new Generic();
const candidato = new Candidato();

let nomeCandidato = "";
let nomeAlternativo = "";

before(() => {
  cy.fixture("db").then((candidatos) => {
    nomeCandidato = candidatos.nome;
    nomeAlternativo = candidatos.nome_alternativo;
  });
});

And("clico em criar novo candidato", function () {
  candidato.clicarEmCriarCandidato();
});
And("preencho o nome do candidato e salvo", function () {
  candidato.preencherNomeCandidadoSalvar(nomeCandidato);
});
Then(
  "devo visualizar mensagem de candidato cadastrado com sucesso",
  function () {
    generic.mensagemDeSucesso("Salvo com sucesso");
  }
);

And("não preencho o nome do candidato e salvo", function () {
  candidato.salvarSemPreencherNomeCandidado();
});
And("clico em editar candidato", function () {
  candidato.cliqueEmEditarCandidato(nomeCandidato);
});
And("altero o nome do candidato e salvo", function () {
  candidato.alterarNomeCandidatoSalvar(nomeAlternativo);
});
And("confirmo deletar usuario", function () {
  generic.confirmarDeletar();
  generic.mensagemDeSucesso("Deletado");
});
And("não devo visualizar o registro na lista", function () {
  candidato.naoDevoVerRegistroNaTabela(nomeAlternativo);
});

When("clico em deletar candidato alterado", function () {
  candidato.cliqueEmDeletarCandidato(nomeAlternativo);
});
And("clico em deletar candidato", function () {
  candidato.cliqueEmDeletarCandidato(nomeCandidato);
});

Then("devo visualizar mensagem de candidato deletado com sucesso", function () {
  generic.mensagemDeSucesso("Deletado");
});
